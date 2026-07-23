// Go Goa Takeaway - Application Logic

document.addEventListener('DOMContentLoaded', () => {
  // App State
  const state = {
    currentTab: 'home',
    selectedCategory: 'all',
    searchQuery: '',
    dietaryFilter: 'all',
    cart: JSON.parse(localStorage.getItem('gogoa_cart')) || [],
    orderType: 'pickup', // 'pickup' or 'delivery'
    promoCode: '',
    discountPercent: 0,
    isOpen: false,
    nextOpeningTimeStr: ''
  };

  // -------------------------------------------------------------
  // Initialize Application
  // -------------------------------------------------------------
  function init() {
    updateOpeningStatus();
    renderCategories();
    renderDishes();
    renderRecipes();
    updateCartUI();
    setupEventListeners();
  }

  // -------------------------------------------------------------
  // Store Opening Status Calculator
  // -------------------------------------------------------------
  function updateOpeningStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 is Sun, 3 is Wed, 4 is Thu, 5 is Fri, 6 is Sat
    const hour = now.getHours();

    const isOpenDay = GO_GOA_DATA.restaurant.openingHours.openDays.includes(day);
    const isOpenHour = hour >= GO_GOA_DATA.restaurant.openingHours.openHour && hour < GO_GOA_DATA.restaurant.openingHours.closeHour;

    state.isOpen = isOpenDay && isOpenHour;

    const badgeEl = document.getElementById('store-status-badge');
    const closedAlertBanner = document.getElementById('closed-alert-banner');
    
    if (state.isOpen) {
      state.nextOpeningTimeStr = "Open Now until 10:00 PM";
      if (badgeEl) {
        badgeEl.className = 'status-badge open';
        badgeEl.innerHTML = `<span class="status-dot"></span> OPEN NOW (Till 10 PM)`;
      }
      if (closedAlertBanner) closedAlertBanner.style.display = 'none';
    } else {
      let timeNotice = "";
      if (isOpenDay && hour < GO_GOA_DATA.restaurant.openingHours.openHour) {
        timeNotice = "Opening Today at 5:00 PM (17:00)";
      } else {
        timeNotice = "Opening Wednesday at 5:00 PM";
      }
      state.nextOpeningTimeStr = timeNotice;

      if (badgeEl) {
        badgeEl.className = 'status-badge closed';
        badgeEl.innerHTML = `<span class="status-dot"></span> CLOSED • ${timeNotice}`;
      }
      if (closedAlertBanner) {
        closedAlertBanner.style.display = 'block';
        closedAlertBanner.innerHTML = `⚠️ <strong>RESTAURANT IS CURRENTLY CLOSED</strong> — ${timeNotice}. Pre-orders placed now will be fulfilled when we open!`;
      }
    }
  }

  // -------------------------------------------------------------
  // Menu Category Navigation & Filtering
  // -------------------------------------------------------------
  function renderCategories() {
    const container = document.getElementById('category-scroll');
    if (!container) return;

    let html = `
      <button class="cat-tab-btn ${state.selectedCategory === 'all' ? 'active' : ''}" data-cat="all">
        <span class="cat-tab-icon">🌟</span>
        <span>All Items</span>
      </button>
    `;

    GO_GOA_DATA.categories.forEach(cat => {
      html += `
        <button class="cat-tab-btn ${state.selectedCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
          <span class="cat-tab-icon">${cat.icon}</span>
          <span>${cat.name}</span>
        </button>
      `;
    });

    container.innerHTML = html;
  }

  function renderDishes() {
    const grid = document.getElementById('dishes-grid');
    if (!grid) return;

    let filtered = GO_GOA_DATA.dishes;

    // Filter by Category
    if (state.selectedCategory !== 'all') {
      filtered = filtered.filter(d => d.categoryId === state.selectedCategory);
    }

    // Filter by Search Query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      filtered = filtered.filter(d => 
        d.name.toLowerCase().includes(q) || 
        d.description.toLowerCase().includes(q)
      );
    }

    // Filter by Dietary Chip
    if (state.dietaryFilter === 'veg') {
      filtered = filtered.filter(d => d.isVeg);
    } else if (state.dietaryFilter === 'nonveg') {
      filtered = filtered.filter(d => !d.isVeg);
    } else if (state.dietaryFilter === 'spicy') {
      filtered = filtered.filter(d => d.spicyLevel >= 2);
    } else if (state.dietaryFilter === 'popular') {
      filtered = filtered.filter(d => d.isPopular);
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
          <h3>No dishes found</h3>
          <p style="color: var(--text-muted); margin-top: 6px;">Try adjusting your search terms or dietary filters.</p>
        </div>
      `;
      return;
    }

    const nonSpicyCategories = ['drinks', 'desserts', 'breads', 'rice', 'accompaniments'];
    const hideVegBadgeCategories = ['drinks'];

    grid.innerHTML = filtered.map(dish => {
      let spiceRatingText = '';
      if (!nonSpicyCategories.includes(dish.categoryId)) {
        spiceRatingText = dish.spicyLevel > 0 ? 'Spiciness: ' + '🌶️'.repeat(dish.spicyLevel) : 'Mild';
      }

      let badgesHtml = '';
      if (!hideVegBadgeCategories.includes(dish.categoryId)) {
        badgesHtml += dish.isVeg ? '<span class="badge-veg">🌿 VEG</span>' : '<span class="badge-nonveg">🍖 NON-VEG</span>';
      }
      if (dish.isPopular) {
        badgesHtml += '<span class="badge-popular">⭐ POPULAR</span>';
      }

      return `
        <div class="dish-card" data-id="${dish.id}">
          <div class="dish-image-wrapper">
            <img src="${dish.image}" alt="${dish.name}" class="dish-img" loading="lazy" onError="this.onerror=null;this.src='https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80';" />
            ${badgesHtml ? `<div class="dish-badge-container">${badgesHtml}</div>` : ''}
          </div>
          <div class="dish-content">
            <div class="dish-header">
              <h4 class="dish-title">${dish.name}</h4>
              <span class="dish-price">£${dish.price.toFixed(2)}</span>
            </div>
            <p class="dish-desc">${dish.description}</p>
            <div class="dish-footer">
              ${spiceRatingText ? `<span class="spice-rating">${spiceRatingText}</span>` : '<span></span>'}
              <button class="btn-add-cart" data-id="${dish.id}">
                <span>+ Add</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // -------------------------------------------------------------
  // Recipes Rendering & Interactive Modal
  // -------------------------------------------------------------
  function renderRecipes() {
    const grid = document.getElementById('recipes-grid');
    if (!grid) return;

    grid.innerHTML = GO_GOA_DATA.recipes.map(rec => `
      <div class="recipe-card">
        <div class="recipe-img-wrapper">
          <img src="${rec.image}" alt="${rec.title}" class="recipe-img" />
        </div>
        <div class="recipe-content">
          <div class="recipe-meta">
            <span>⏱️ Prep: ${rec.prepTime}</span>
            <span>🔥 Cook: ${rec.cookTime}</span>
          </div>
          <h3 class="recipe-title">${rec.title}</h3>
          <p class="recipe-quote">"${rec.quote}"</p>
          <button class="btn-recipe-view" data-recipe-id="${rec.id}">
            View Chef's Recipe & Ingredients →
          </button>
        </div>
      </div>
    `).join('');
  }

  function openRecipeModal(recipeId) {
    const recipe = GO_GOA_DATA.recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    const modalOverlay = document.getElementById('recipe-modal');
    const modalContainer = document.getElementById('recipe-modal-content');
    if (!modalOverlay || !modalContainer) return;

    modalContainer.innerHTML = `
      <button class="modal-close-btn" id="close-recipe-modal">&times;</button>
      <img src="${recipe.image}" alt="${recipe.title}" class="modal-hero-img" />
      <div class="modal-body">
        <h3>${recipe.title}</h3>
        <p style="color: var(--accent-saffron); font-weight: 700; margin-bottom: 12px;">By ${recipe.chef}</p>
        <div class="modal-recipe-meta">
          <span>Prep: ${recipe.prepTime}</span>
          <span>Cook: ${recipe.cookTime}</span>
          <span>Serves: ${recipe.servings}</span>
        </div>
        <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.6; margin-bottom: 24px;">${recipe.story}</p>
        
        <h4 style="font-size: 1.25rem; color: var(--primary-navy); margin-bottom: 12px;">🛒 Ingredients Checklist (Check as you prepare):</h4>
        <ul class="ingredients-list">
          ${recipe.ingredients.map((ing, i) => `
            <li>
              <input type="checkbox" id="ing-${i}" />
              <label for="ing-${i}">${ing}</label>
            </li>
          `).join('')}
        </ul>

        <h4 style="font-size: 1.25rem; color: var(--primary-navy); margin-bottom: 16px;">🍳 Step-by-Step Instructions:</h4>
        <ol class="steps-list">
          ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>
    `;

    modalOverlay.classList.add('active');

    document.getElementById('close-recipe-modal').addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  // -------------------------------------------------------------
  // Closed Restaurant Pre-Order Warning Modal
  // -------------------------------------------------------------
  function showClosedWarningModal() {
    const modal = document.getElementById('closed-modal');
    if (!modal) return;
    document.getElementById('closed-modal-opening-text').textContent = state.nextOpeningTimeStr;
    modal.classList.add('active');
  }

  // -------------------------------------------------------------
  // Cart Management Logic
  // -------------------------------------------------------------
  function addToCart(dishId) {
    const existing = state.cart.find(item => item.id === dishId);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({ id: dishId, quantity: 1 });
    }
    saveCart();
    updateCartUI();

    if (!state.isOpen) {
      showToast(`Added to Pre-Order! Note: We open at 5:00 PM.`);
      showClosedWarningModal();
    } else {
      showToast("Added item to your order!");
    }
  }

  function updateQuantity(dishId, change) {
    const item = state.cart.find(i => i.id === dishId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
      state.cart = state.cart.filter(i => i.id !== dishId);
    }
    saveCart();
    updateCartUI();
  }

  function saveCart() {
    localStorage.setItem('gogoa_cart', JSON.stringify(state.cart));
  }

  function updateCartUI() {
    // Total count badge
    const totalCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);
    const countBadges = document.querySelectorAll('.cart-count-val');
    countBadges.forEach(b => b.textContent = totalCount);

    const bodyEl = document.getElementById('cart-items-container');
    if (!bodyEl) return;

    if (state.cart.length === 0) {
      bodyEl.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
          <div style="font-size: 2.5rem; margin-bottom: 10px;">🛍️</div>
          <h4 style="color: var(--primary-navy);">Your cart is empty</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 6px;">Add delicious dishes from our Goan menu to get started!</p>
        </div>
      `;
    } else {
      bodyEl.innerHTML = state.cart.map(cartItem => {
        const dish = GO_GOA_DATA.dishes.find(d => d.id === cartItem.id);
        if (!dish) return '';
        const itemTotal = dish.price * cartItem.quantity;
        return `
          <div class="cart-item">
            <img src="${dish.image}" alt="${dish.name}" class="cart-item-img" onError="this.onerror=null;this.src='https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80';" />
            <div class="cart-item-details">
              <div class="cart-item-name">${dish.name}</div>
              <div class="cart-item-price">£${itemTotal.toFixed(2)}</div>
            </div>
            <div class="cart-item-qty">
              <button class="qty-btn btn-qty-minus" data-id="${dish.id}">-</button>
              <span style="font-weight: 700; font-size: 0.9rem;">${cartItem.quantity}</span>
              <button class="qty-btn btn-qty-plus" data-id="${dish.id}">+</button>
            </div>
          </div>
        `;
      }).join('');
    }

    // Totals calculation
    let subtotal = state.cart.reduce((sum, item) => {
      const dish = GO_GOA_DATA.dishes.find(d => d.id === item.id);
      return sum + (dish ? dish.price * item.quantity : 0);
    }, 0);

    let discount = 0;
    if (state.promoCode.toUpperCase() === 'DISCOUNT') {
      discount = subtotal * 0.10;
    }

    let deliveryFee = (state.orderType === 'delivery' && subtotal > 0) ? 2.50 : 0;
    let grandTotal = Math.max(0, subtotal - discount + deliveryFee);

    document.getElementById('cart-subtotal').textContent = `£${subtotal.toFixed(2)}`;
    document.getElementById('cart-discount').textContent = `-£${discount.toFixed(2)}`;
    document.getElementById('cart-delivery').textContent = state.orderType === 'delivery' ? `£${deliveryFee.toFixed(2)}` : 'FREE (Pickup)';
    document.getElementById('cart-grand-total').textContent = `£${grandTotal.toFixed(2)}`;

    // Update checkout button depending on store status
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
      if (!state.isOpen) {
        checkoutBtn.innerHTML = `<span>🕒 Schedule Pre-Order (${state.nextOpeningTimeStr}) →</span>`;
        checkoutBtn.style.background = 'linear-gradient(135deg, #D96B27 0%, #C84B31 100%)';
        checkoutBtn.style.color = '#FFFFFF';
      } else {
        checkoutBtn.innerHTML = `<span>Proceed to Checkout →</span>`;
        checkoutBtn.style.background = 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-saffron) 100%)';
        checkoutBtn.style.color = 'var(--primary-navy)';
      }
    }
  }

  // -------------------------------------------------------------
  // Toast Notifications
  // -------------------------------------------------------------
  function showToast(message) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 24px;
        background: var(--primary-navy);
        color: white;
        padding: 14px 26px;
        border-radius: var(--radius-full);
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        border: 1px solid var(--accent-gold);
        font-weight: 700;
        z-index: 4000;
        transition: all 0.3s ease;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
    }, 3000);
  }

  // -------------------------------------------------------------
  // Event Listeners Setup
  // -------------------------------------------------------------
  function setupEventListeners() {
    // Navigation Tabs
    document.querySelectorAll('.nav-link, .mobile-nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = btn.dataset.tab;
        if (tab) {
          e.preventDefault();
          document.querySelectorAll('.nav-link, .mobile-nav-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const targetSection = document.getElementById(tab);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Category Tabs click
    document.getElementById('category-scroll').addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-tab-btn');
      if (btn) {
        state.selectedCategory = btn.dataset.cat;
        renderCategories();
        renderDishes();
      }
    });

    // Search input
    document.getElementById('menu-search').addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderDishes();
    });

    // Dietary filter chips
    document.getElementById('dietary-chips').addEventListener('click', (e) => {
      const btn = e.target.closest('.chip-btn');
      if (btn) {
        document.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.dietaryFilter = btn.dataset.filter;
        renderDishes();
      }
    });

    // Add to cart click
    document.getElementById('dishes-grid').addEventListener('click', (e) => {
      const addBtn = e.target.closest('.btn-add-cart');
      if (addBtn) {
        const dishId = addBtn.dataset.id;
        addToCart(dishId);
      }
    });

    // Recipe modal triggers
    document.getElementById('recipes-grid').addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-recipe-view');
      if (btn) {
        openRecipeModal(btn.dataset.recipeId);
      }
    });

    // Closed Modal buttons
    document.getElementById('close-closed-modal')?.addEventListener('click', () => {
      document.getElementById('closed-modal').classList.remove('active');
    });

    document.getElementById('understand-preorder-btn')?.addEventListener('click', () => {
      document.getElementById('closed-modal').classList.remove('active');
    });

    // Cart Drawer Toggle
    const cartBtn = document.getElementById('open-cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartOverlay = document.getElementById('cart-drawer-overlay');

    if (cartBtn) cartBtn.addEventListener('click', () => cartOverlay.classList.add('active'));
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => cartOverlay.classList.remove('active'));

    // Cart Order Type Switcher
    document.getElementById('type-pickup').addEventListener('click', () => {
      state.orderType = 'pickup';
      document.getElementById('type-pickup').classList.add('active');
      document.getElementById('type-delivery').classList.remove('active');
      updateCartUI();
    });

    document.getElementById('type-delivery').addEventListener('click', () => {
      state.orderType = 'delivery';
      document.getElementById('type-delivery').classList.add('active');
      document.getElementById('type-pickup').classList.remove('active');
      updateCartUI();
    });

    // Cart Quantity Buttons
    document.getElementById('cart-items-container').addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-qty-plus')) {
        updateQuantity(e.target.dataset.id, 1);
      } else if (e.target.classList.contains('btn-qty-minus')) {
        updateQuantity(e.target.dataset.id, -1);
      }
    });

    // Promo Code Application
    document.getElementById('apply-promo-btn').addEventListener('click', () => {
      const code = document.getElementById('promo-input').value.trim();
      if (code.toUpperCase() === 'DISCOUNT') {
        state.promoCode = code;
        showToast('🎉 10% Discount Applied!');
        updateCartUI();
      } else {
        showToast('❌ Invalid code. Use code DISCOUNT for 10% off');
      }
    });

    // Checkout Modal Simulation
    document.getElementById('checkout-btn').addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Your cart is empty!');
        return;
      }
      cartOverlay.classList.remove('active');

      if (!state.isOpen) {
        alert(`🕒 PRE-ORDER RECEIVED FOR OPENING TIME!\n\nStatus: Pre-Order (${state.nextOpeningTimeStr})\nOrder Type: ${state.orderType.toUpperCase()}\n\nThank you! Your pre-order will be prepared freshly when we open at 5:00 PM.\nPickup / Delivery Location: 94 Duddingston Park, Edinburgh.`);
      } else {
        alert(`🎉 ORDER CONFIRMED!\n\nThank you for your order! Your ${state.orderType.toUpperCase()} order has been received by Go Goa Takeaway.\nEstimated time: 25-35 minutes.\nAddress: 94 Duddingston Park, Edinburgh.`);
      }

      state.cart = [];
      saveCart();
      updateCartUI();
    });
  }

  // Run Initialization
  init();
});
