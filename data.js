// Go Goa Edinburgh - Comprehensive Data Store with Authentic Assets & Drink Photos

const GO_GOA_DATA = {
  restaurant: {
    name: "Go Goa Takeaway",
    tagline: "Indian & Goan Home Style Cooking",
    address: "94 Duddingston Park, Edinburgh, EH15 1JZ",
    phoneLandline: "0131 669 4048",
    phoneMobile: "07438 872241",
    email: "gogoaedinburgh@gmail.com",
    mapEmbedUrl: "https://maps.google.com/maps?q=94%20Duddingston%20Park,%20Edinburgh,%20EH15%201JZ&t=&z=15&ie=UTF8&iwloc=&output=embed",
    openingHours: {
      schedule: [
        { days: "Wednesday - Sunday", hours: "5:00 PM - 10:00 PM" },
        { days: "Monday - Tuesday", hours: "Closed" }
      ],
      openHour: 17,
      closeHour: 22,
      openDays: [3, 4, 5, 6, 0] // Wed, Thu, Fri, Sat, Sun
    },
    promo: {
      bannerText: "Order Online & Get 10% OFF on Wed & Thu! Use Code:",
      code: "DISCOUNT",
      discountPercent: 10
    },
    socials: {
      facebook: "https://www.facebook.com/Go-Goa-Edinburgh-103436119164062",
      instagram: "https://www.instagram.com/gogoaedinburgh/"
    },
    assets: {
      logo: "https://gogoaedinburgh.co.uk/wp-content/uploads/2022/07/go-goa-indian-takeaway-edinburgh-logo-top-8.png",
      logoBottom: "https://gogoaedinburgh.co.uk/wp-content/uploads/2022/07/go-goa-indian-takeaway-edinburgh-logo-bottom-8.png",
      chefRoy: "https://gogoaedinburgh.co.uk/wp-content/uploads/2022/08/go-goa-indian-takeaway-edinburgh-roy-cliff-chef1-scaled.jpg",
      fiveStarBadge: "https://gogoaedinburgh.co.uk/wp-content/uploads/2022/07/go-goa-indian-takeaway-edinburgh-5-star-indian-food-8.png",
      heroBg: "https://gogoaedinburgh.co.uk/wp-content/uploads/2022/07/go-goa-indian-food-edinburgh-takeaway-delivery-edinburgh.jpg",
      foodIllustration: "https://gogoaedinburgh.co.uk/wp-content/uploads/2024/07/go-goa-indian-food-edinburgh-takeaway.png",
      spicesBg: "https://gogoaedinburgh.co.uk/wp-content/uploads/2022/07/go-goa-indian-food-edinburgh-takeaway-sices-full.jpg"
    }
  },

  categories: [
    { id: "street-food", name: "Street Food", icon: "🌶️", desc: "Popular Goan & Mumbai street eats" },
    { id: "starters", name: "Starters", icon: "🥟", desc: "Crispy, savory appetizers freshly prepared" },
    { id: "goan-seafood", name: "Goan Seafood Curries", icon: "🦐", desc: "Chef Roy's signature coastal recipes" },
    { id: "goan-nonveg", name: "Goan Non-Veg Curries", icon: "🍗", desc: "Rich heritage Goan meat curries" },
    { id: "goan-veg", name: "Goan Veg Curries", icon: "🥥", desc: "Traditional coconut & spice stewed vegetables" },
    { id: "house-specials-nonveg", name: "House Special Non-Veg", icon: "👑", desc: "Chef's special regional delicacies" },
    { id: "house-specials-veg", name: "House Special Veg", icon: "🥬", desc: "Flavorful vegetarian main courses" },
    { id: "tandoori", name: "Tandoori Specialities", icon: "🔥", desc: "Clay oven roasted skewered meats" },
    { id: "biryani", name: "Goan Special Biryanis", icon: "🍚", desc: "Aromatic basmati rice cooked in house spices" },
    { id: "dhaba-delicacies", name: "Dhaba Style Delicacies", icon: "🥘", desc: "Rustic North Indian highway style curries" },
    { id: "dal-tadka", name: "Adraki Dhaba Dal & Classics", icon: "🍲", desc: "Hearty lentil curries & timeless classics" },
    { id: "rice", name: "Basmati Rice Selection", icon: "🌾", desc: "Fragrant basmati rice preparations" },
    { id: "breads", name: "Tandoori Breads", icon: "🫓", desc: "Freshly baked naans from our clay oven" },
    { id: "accompaniments", name: "Accompaniments", icon: "🥗", desc: "Chutneys, raitas, papadums and salads" },
    { id: "desserts", name: "Desserts", icon: "🍨", desc: "Authentic sweet Goan & Indian treats" },
    { id: "drinks", name: "Drinks", icon: "🥤", desc: "Refreshing soft drinks" }
  ],

  dishes: [
    // Street Food
    {
      id: "sf1",
      categoryId: "street-food",
      name: "Chicken Manchurian (Indo-Chinese)",
      price: 8.99,
      description: "Batter fried chicken breast piece in a fiery Indo-Chinese Manchurian sauce.",
      image: "https://flipdish.imgix.net/MeW2HsWy8FndfkFFkxEPER68bfI.jpg",
      spicyLevel: 2,
      isVeg: false,
      isPopular: true
    },
    {
      id: "sf2",
      categoryId: "street-food",
      name: "Gobi Manchurian (Indo-Chinese)",
      price: 7.99,
      description: "Crispy batter fried cauliflower florets tossed in rich soy, chili, garlic & scallion Manchurian glaze.",
      image: "https://flipdish.imgix.net/9DRD9FoWdn5oXikdS2qk6OrhJU.jpg",
      spicyLevel: 2,
      isVeg: true,
      isPopular: true
    },
    {
      id: "sf3",
      categoryId: "street-food",
      name: "Chilly Paneer",
      price: 8.50,
      description: "Lightly fried cottage cheese cubes wok-fried with sweet peppers, onions and spicy dark soy chili glaze.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
      spicyLevel: 2,
      isVeg: true,
      isPopular: false
    },
    {
      id: "sf4",
      categoryId: "street-food",
      name: "Miramar Sev Papdi Chaat",
      price: 6.99,
      description: "Miramar street temptation: spicy aloo tikki topped with tamarind sauce, mint yogurt, nylon sev & crispy papdi.",
      image: "https://flipdish.imgix.net/Pdf0HioYBrjenmGtT8VwAEi2OK4.jpg",
      spicyLevel: 1,
      isVeg: true,
      isPopular: true
    },
    {
      id: "sf5",
      categoryId: "street-food",
      name: "Goan Beef Chilly Fry",
      price: 9.99,
      description: "Cubes of beef marinated with garlic and ginger paste, dusted with turmeric and pan-seared in spices with zesty Goan vinegar.",
      image: "https://flipdish.imgix.net/yYwmapYVk0iui0frJxLrWYiJGj8.jpg",
      spicyLevel: 3,
      isVeg: false,
      isPopular: true
    },
    {
      id: "sf6",
      categoryId: "street-food",
      name: "Goan King Prawn Chilly Fry",
      price: 9.99,
      description: "King prawns sautéed with green & red peppers in exotic spices with a hint of Goan vinegar for extra tangy punch.",
      image: "https://flipdish.imgix.net/ieIgpyoHhZmSrsM2BhPGozLxeUM.jpg",
      spicyLevel: 3,
      isVeg: false,
      isPopular: true
    },
    {
      id: "sf7",
      categoryId: "street-food",
      name: "Creamy Butter Garlic Prawns",
      price: 10.99,
      description: "King prawns tossed in a very creamy and buttery sauce dusted with chef choice herbs.",
      image: "https://flipdish.imgix.net/YcBHgEkYHvaI4KwyfpVtmbbsIo.jpg",
      spicyLevel: 1,
      isVeg: false,
      isPopular: true
    },
    {
      id: "sf8",
      categoryId: "street-food",
      name: "Mushroom Chilly",
      price: 7.99,
      description: "Crispy batter fried mushroom tossed in spicy homemade chili sauce.",
      image: "https://flipdish.imgix.net/oIXkxem5xTCVg2t2uwx75cJMZrU.jpg",
      spicyLevel: 2,
      isVeg: true,
      isPopular: false
    },

    // Starters
    {
      id: "st1",
      categoryId: "starters",
      name: "Vegetable Pakora",
      price: 4.99,
      description: "Fresh mixed vegetables seasoned, lightly battered in gram flour and deep fried to crisp golden perfection.",
      image: "https://flipdish.imgix.net/fKT16ArhUGkn3lFHo2XElzPcs40.jpg",
      spicyLevel: 1,
      isVeg: true,
      isPopular: true
    },
    {
      id: "st2",
      categoryId: "starters",
      name: "Chicken Pakora",
      price: 5.99,
      description: "Chicken cubes marinated with Indian spices, ginger, garlic, battered and deep fried.",
      image: "https://flipdish.imgix.net/UlOO6dXCK1e3M8UVtxvXVZ9Z78.jpg",
      spicyLevel: 1,
      isVeg: false,
      isPopular: true
    },
    {
      id: "st3",
      categoryId: "starters",
      name: "Goan Chicken 65",
      price: 7.99,
      description: "Diced chicken breast pieces marinated with Indian spices, ginger, garlic and crispy fried.",
      image: "https://flipdish.imgix.net/KmxjGvl91j2nLRnZJ0g4XNW3bA.jpg",
      spicyLevel: 2,
      isVeg: false,
      isPopular: true
    },
    {
      id: "st4",
      categoryId: "starters",
      name: "Mumbai Samosa Chaat",
      price: 6.99,
      description: "Vegetable samosa, crispy sev, mint & tamarind chutney, chickpeas, pomegranate seeds.",
      image: "https://flipdish.imgix.net/cvMrWs9gZVzBZdAPEGHWDOeqr8.jpg",
      spicyLevel: 1,
      isVeg: true,
      isPopular: true
    },
    {
      id: "st5",
      categoryId: "starters",
      name: "Masala Chips",
      price: 4.99,
      description: "Crispy french fries tossed in chef's special aromatic masala spice blend.",
      image: "https://flipdish.imgix.net/E8caC9K67e6Ac8H4jI4TUM5JoT0.jpg",
      spicyLevel: 2,
      isVeg: true,
      isPopular: true
    },
    {
      id: "st6",
      categoryId: "starters",
      name: "Fries Chaat",
      price: 5.99,
      description: "Fries dusted with spice aromatics powder, bathed with special chili tomato sauce and tamarind pulp.",
      image: "https://flipdish.imgix.net/4YgNqSdrBIWHbV4yAdJxdghMKKU.jpg",
      spicyLevel: 2,
      isVeg: true,
      isPopular: false
    },

    // Goan Seafood Curries
    {
      id: "gs1",
      categoryId: "goan-seafood",
      name: "Mom's Goan Fish Curry",
      price: 11.99,
      description: "Chef Roy's mother's heirloom recipe! Tender fish cooked in ground fresh coconut, red chilies, coriander & dried kokum.",
      image: "https://flipdish.imgix.net/xUxo0GpfFmVXOyPEjkvuhSb2Yjk.jpg",
      spicyLevel: 2,
      isVeg: false,
      isPopular: true
    },
    {
      id: "gs2",
      categoryId: "goan-seafood",
      name: "Panjim Green Fish Curry",
      price: 11.99,
      description: "Fish fillet cooked in Goan green masala paste of cilantro, mint, green chilies, coconut & lime.",
      image: "https://flipdish.imgix.net/cG8yUGOx6nQJTZFSFcTlrVdMUHM.jpg",
      spicyLevel: 2,
      isVeg: false,
      isPopular: false
    },
    {
      id: "gs3",
      categoryId: "goan-seafood",
      name: "Salcete Prawn Masala",
      price: 12.99,
      description: "King prawns cooked in special South Goan roasted coriander and tamarind masala sauce.",
      image: "https://flipdish.imgix.net/ZECB9e6o0NzgwYnrAVQOfvURjc.jpg",
      spicyLevel: 2,
      isVeg: false,
      isPopular: true
    },
    {
      id: "gs4",
      categoryId: "goan-seafood",
      name: "Arambol King Prawn Xec Xec",
      price: 12.99,
      description: "Rich coastal Goan specialty: King prawns tossed in roasted coconut paste, mace, cinnamon and roasted chili glaze.",
      image: "https://flipdish.imgix.net/oBn4g9IGfvlIiWwKNXBdhSSzZrc.jpg",
      spicyLevel: 3,
      isVeg: false,
      isPopular: true
    },

    // Goan Non-Veg Curries
    {
      id: "gn1",
      categoryId: "goan-nonveg",
      name: "Mapusa Chicken Xacuti",
      price: 9.99,
      description: "Chicken cooked with pan-scorched ground spices (star anise, poppy seeds) & coconut in brown gravy.",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
      spicyLevel: 2,
      isVeg: false,
      isPopular: true
    },
    {
      id: "gn2",
      categoryId: "goan-nonveg",
      name: "Mapusa Lamb Xacuti",
      price: 10.99,
      description: "Tender lamb cooked with pan-scorched ground spices & roasted coconut brown gravy.",
      image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
      spicyLevel: 2,
      isVeg: false,
      isPopular: true
    },
    {
      id: "gn3",
      categoryId: "goan-nonveg",
      name: "Chef Fernando's Pork Vindaloo",
      price: 10.50,
      description: "Pork cooked in hot chili paste, Portuguese spices & garlic bathed with palm vinegar.",
      image: "https://flipdish.imgix.net/NyTySuZVCViasG2QBWGd6bYbeg.jpg",
      spicyLevel: 3,
      isVeg: false,
      isPopular: true
    },
    {
      id: "gn4",
      categoryId: "goan-nonveg",
      name: "Chef Fernando's Chicken Vindaloo",
      price: 8.99,
      description: "Chicken cooked in hot chili paste, Portuguese spices & garlic bathed with vinegar.",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
      spicyLevel: 3,
      isVeg: false,
      isPopular: false
    },
    {
      id: "gn5",
      categoryId: "goan-nonveg",
      name: "Salcete Chicken Masala",
      price: 8.99,
      description: "Chicken cooked in special Goan roasted masala sauce.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
      spicyLevel: 2,
      isVeg: false,
      isPopular: false
    },

    // Goan Veg Curries
    {
      id: "gv1",
      categoryId: "goan-veg",
      name: "Margao Veg Caldin",
      price: 9.99,
      description: "Flavored medley of vegetables cooked in Goan coconut based milk with mild spices to give it a stewy taste.",
      image: "https://flipdish.imgix.net/H3U17HT1XhyqdwuWY9qJI1xHjE.jpg",
      spicyLevel: 1,
      isVeg: true,
      isPopular: true
    },
    {
      id: "gv2",
      categoryId: "goan-veg",
      name: "Hindu Style Goan Eggplant Masala",
      price: 10.50,
      description: "Moderately spiced eggplant cooked in combination of ginger, garlic, cumin & Goan red vinegar masala.",
      image: "https://flipdish.imgix.net/qwFLYYDJTvUtJLVPXI9qZ6rrIo.jpg",
      spicyLevel: 2,
      isVeg: true,
      isPopular: false
    },
    {
      id: "gv3",
      categoryId: "goan-veg",
      name: "Goan Chonyacho Ross",
      price: 10.50,
      description: "Popular Saraswat Goan Hindu delicacy: Chickpeas cooked in onions, tomatoes, curry leaves, roasted ground spices & coconut.",
      image: "https://flipdish.imgix.net/gcV9jdS4jdQAsLmxPWLgMk0NLg.jpg",
      spicyLevel: 2,
      isVeg: true,
      isPopular: true
    },
    {
      id: "gv4",
      categoryId: "goan-veg",
      name: "Goan Chana Masala",
      price: 9.99,
      description: "Spiced chickpeas tempered with roasted cumin, amchur powder and Goan tamarind gravy.",
      image: "https://flipdish.imgix.net/pK2FM0YOhZMsePzN9gQFtaHiY.jpg",
      spicyLevel: 2,
      isVeg: true,
      isPopular: false
    },

    // House Specials Non-Veg
    {
      id: "hsn1",
      categoryId: "house-specials-nonveg",
      name: "Chicken Chettinad",
      price: 10.99,
      description: "Chicken cooked in homemade Chettinad roasted spice masala.",
      image: "https://flipdish.imgix.net/xmdkU0D9mcQiHvO0W27rTDZPrvw.jpg",
      spicyLevel: 3,
      isVeg: false,
      isPopular: true
    },
    {
      id: "hsn2",
      categoryId: "house-specials-nonveg",
      name: "Chicken Kadai",
      price: 10.99,
      description: "Chicken sautéed with ginger, garlic, bell peppers & crushed coriander spices.",
      image: "https://flipdish.imgix.net/BArJ7hpGTRUCo4Ay8ayHYxc1za4.jpg",
      spicyLevel: 2,
      isVeg: false,
      isPopular: true
    },
    {
      id: "hsn3",
      categoryId: "house-specials-nonveg",
      name: "Chicken Kolhapuri",
      price: 10.99,
      description: "Chicken cooked with bird's eye chili & homemade Kolhapuri masala.",
      image: "https://flipdish.imgix.net/ftb4YArPonulLLQ12ZclNjHMEfk.jpg",
      spicyLevel: 3,
      isVeg: false,
      isPopular: false
    },
    {
      id: "hsn4",
      categoryId: "house-specials-nonveg",
      name: "Kori Gassi",
      price: 10.99,
      description: "Traditional Mangalorean chicken curry: chicken cooked in onion gravy, coastal spices & coconut milk.",
      image: "https://flipdish.imgix.net/CblZnJDNldDBeXkEMnLPjCBQ0Q.jpg",
      spicyLevel: 2,
      isVeg: false,
      isPopular: true
    },
    {
      id: "hsn5",
      categoryId: "house-specials-nonveg",
      name: "Mughlai Lamb Curry",
      price: 12.99,
      description: "Succulent pieces of lamb cooked with Indian spices in rich cashew nut gravy.",
      image: "https://flipdish.imgix.net/z8mChzHr0t0VTmxm93GcAVabrE.jpg",
      spicyLevel: 1,
      isVeg: false,
      isPopular: true
    },

    // House Specials Veg
    {
      id: "hsv1",
      categoryId: "house-specials-veg",
      name: "Kadai Paneer",
      price: 10.50,
      description: "Chunks of cottage cheese cooked with peppers, onions & Indian kadai spices.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
      spicyLevel: 2,
      isVeg: true,
      isPopular: true
    },
    {
      id: "hsv2",
      categoryId: "house-specials-veg",
      name: "Aloo Bhindi",
      price: 9.99,
      description: "Potatoes & okra cooked in a spiced masala sauce.",
      image: "https://flipdish.imgix.net/s6M6OoKZNic8pxZ9jBTs4yg2Ag.jpg",
      spicyLevel: 1,
      isVeg: true,
      isPopular: false
    },

    // Tandoori
    {
      id: "td1",
      categoryId: "tandoori",
      name: "Tandoori Chicken Tikka",
      price: 6.99,
      description: "Chicken cubes marinated overnight in ginger & garlic paste, slowly massaged with Indian spices and clay-oven roasted.",
      image: "https://flipdish.imgix.net/lyaMKl3x1Q9yfMhjoSy54vVlw.jpg",
      spicyLevel: 2,
      isVeg: false,
      isPopular: true
    },

    // Biryani
    {
      id: "b1",
      categoryId: "biryani",
      name: "Goan Special Biryani",
      price: 11.99,
      description: "Long grain basmati rice steamed in homemade biryani masala, yogurt & mint, topped with fried brown onions & fresh coriander.",
      image: "https://flipdish.imgix.net/kVcRnxDKveGbkpAAY12eYPV9gk.jpg",
      spicyLevel: 2,
      isVeg: false,
      isPopular: true
    },

    // Dhaba Delicacies
    {
      id: "dh1",
      categoryId: "dhaba-delicacies",
      name: "Lasooni Shahi Paneer",
      price: 10.50,
      description: "Cottage cheese cooked in rich garlic infused tomato cream gravy with fenugreek.",
      image: "https://flipdish.imgix.net/R8uZDyUZyK3t6h7bZLo9hikeZA.jpg",
      spicyLevel: 1,
      isVeg: true,
      isPopular: true
    },
    {
      id: "dh2",
      categoryId: "dhaba-delicacies",
      name: "Dal Makhani",
      price: 9.99,
      description: "Black lentils slow simmered overnight with butter, cream, tomatoes and garlic temper.",
      image: "https://flipdish.imgix.net/ka56MzKNIFgIxEUj7l2Tzf5gPo.jpg",
      spicyLevel: 1,
      isVeg: true,
      isPopular: true
    },
    {
      id: "dh3",
      categoryId: "dhaba-delicacies",
      name: "Dhaba Butter Chicken",
      price: 10.99,
      description: "Tender chicken tikka in a rich, buttery, velvety tomato cream gravy.",
      image: "https://flipdish.imgix.net/CfQXjrKUgWWlTBEf3ZcbWRmqkkg.jpg",
      spicyLevel: 1,
      isVeg: false,
      isPopular: true
    },
    {
      id: "dh4",
      categoryId: "dhaba-delicacies",
      name: "Lamb Rogan Josh",
      price: 11.99,
      description: "Classic Kashmiri lamb stew cooked on high flame with Kashmiri red chili, dry ginger & fennel.",
      image: "https://flipdish.imgix.net/YxmcBWYGkfie2NWfnKoY6DFwHdI.jpg",
      spicyLevel: 2,
      isVeg: false,
      isPopular: true
    },

    // Dal Tadka & Classics
    {
      id: "dt1",
      categoryId: "dal-tadka",
      name: "Village Dal Fry",
      price: 9.99,
      description: "Lentils cooked with spices & curry leaf, topped with heated oil & Indian spices for a rustic village flavor.",
      image: "https://flipdish.imgix.net/04LvXY3lVycY3770qCVOoVePdw.jpg",
      spicyLevel: 1,
      isVeg: true,
      isPopular: true
    },
    {
      id: "dt2",
      categoryId: "dal-tadka",
      name: "Aloo Mutter",
      price: 9.50,
      description: "Potatoes and tender green peas cooked in a spiced cumin tomato curry.",
      image: "https://flipdish.imgix.net/34ovXmyJ1KE57BoCP0Z7O8kD4c.jpg",
      spicyLevel: 1,
      isVeg: true,
      isPopular: false
    },
    {
      id: "dt3",
      categoryId: "dal-tadka",
      name: "Mutter Paneer",
      price: 10.50,
      description: "Cottage cheese and green peas simmered in a spiced onion tomato gravy.",
      image: "https://flipdish.imgix.net/drsl3uBBJ1NQhWmr8q2El9WNZVY.jpg",
      spicyLevel: 1,
      isVeg: true,
      isPopular: false
    },
    {
      id: "dt4",
      categoryId: "dal-tadka",
      name: "Rajma Masala",
      price: 9.50,
      description: "Red kidney beans slow cooked in a thick gravy with whole spices and cilantro.",
      image: "https://flipdish.imgix.net/2V7C9aVAk8Nb4WEdBtQS1eKeuJE.jpg",
      spicyLevel: 1,
      isVeg: true,
      isPopular: false
    },

    // Rice
    {
      id: "rc1",
      categoryId: "rice",
      name: "Mushroom Rice",
      price: 3.95,
      description: "Basmati rice cooked with sautéed mushrooms, cardamom and cloves.",
      image: "https://flipdish.imgix.net/8eAhtTFuBErOlhL7jf1StghR9zo.jpg",
      spicyLevel: 0,
      isVeg: true,
      isPopular: true
    },
    {
      id: "rc2",
      categoryId: "rice",
      name: "Chicken Fried Rice (Indo-Chinese)",
      price: 5.95,
      description: "Wok-fried basmati rice with diced chicken, eggs, soy sauce and spring onions.",
      image: "https://flipdish.imgix.net/CPwuWIZe5mMHBWOvkHxu2wWHeo.jpg",
      spicyLevel: 0,
      isVeg: false,
      isPopular: true
    },

    // Breads
    {
      id: "br1",
      categoryId: "breads",
      name: "Plain Naan",
      price: 2.50,
      description: "Leavened flatbread baked live in clay tandoor oven.",
      image: "https://flipdish.imgix.net/5Jt8bqHIa5kzllfQYgZctdMOB3Q.jpg",
      spicyLevel: 0,
      isVeg: true,
      isPopular: false
    },
    {
      id: "br2",
      categoryId: "breads",
      name: "Garlic Naan",
      price: 3.20,
      description: "Freshly baked naan brushed with melted garlic butter and chopped coriander.",
      image: "https://flipdish.imgix.net/7cKsgcFRSRpX5asCw5qwBQkKXw.jpg",
      spicyLevel: 0,
      isVeg: true,
      isPopular: true
    },
    {
      id: "br3",
      categoryId: "breads",
      name: "Butter Naan",
      price: 2.80,
      description: "Clay oven leavened naan brushed generously with pure butter.",
      image: "https://flipdish.imgix.net/Ip79oXiQj70gI4WNoGDFY7hD9k.jpg",
      spicyLevel: 0,
      isVeg: true,
      isPopular: true
    },

    // Accompaniments
    {
      id: "acc1",
      categoryId: "accompaniments",
      name: "Goan Salad",
      price: 3.00,
      description: "Slices of red onion, tomato, cucumber with lemon chili dressing.",
      image: "https://flipdish.imgix.net/sYJIpx6dxkuh6GPIGmKdHQlE470.jpg",
      spicyLevel: 0,
      isVeg: true,
      isPopular: false
    },

    // Desserts
    {
      id: "des1",
      categoryId: "desserts",
      name: "Gulab Jamun (2 Pcs)",
      price: 3.95,
      description: "Golden fried milk dumpling soaked in warm rose & cardamom syrup.",
      image: "https://flipdish.imgix.net/BUM6wn6wbVUcaSvkrxTxHbRLxaY.jpg",
      spicyLevel: 0,
      isVeg: true,
      isPopular: true
    },
    {
      id: "des2",
      categoryId: "desserts",
      name: "Carrot Halwa",
      price: 3.95,
      description: "Slow-cooked grated carrots in milk, ghee, khoya, cashew nuts and raisins.",
      image: "https://flipdish.imgix.net/Hy4W78VRqnD3yDpKDPSMqpnH94.jpg",
      spicyLevel: 0,
      isVeg: true,
      isPopular: true
    },

    // Drinks - Authentic High Quality Product Photos (Correct brand specific URLs)
    {
      id: "dr1",
      categoryId: "drinks",
      name: "Coca Cola (330ml Can)",
      price: 1.80,
      description: "Chilled classic refreshing Coca-Cola red can (330ml).",
      image: "images/coca_cola.png",
      spicyLevel: 0,
      isVeg: true,
      isPopular: true
    },
    {
      id: "dr2",
      categoryId: "drinks",
      name: "Diet Coke (330ml Can)",
      price: 1.80,
      description: "Crisp zero-sugar Diet Coke silver can served ice cold.",
      image: "images/diet_coke.png",
      spicyLevel: 0,
      isVeg: true,
      isPopular: false
    },
    {
      id: "dr3",
      categoryId: "drinks",
      name: "Irn Bru (330ml Can)",
      price: 1.80,
      description: "Scotland's iconic orange & blue Irn-Bru carbonated drink (330ml).",
      image: "images/irnbru.png",
      spicyLevel: 0,
      isVeg: true,
      isPopular: true
    },
    {
      id: "dr4",
      categoryId: "drinks",
      name: "Fanta Orange (330ml Can)",
      price: 1.80,
      description: "Sparkling bright orange Fanta fruit soda served ice cold.",
      image: "images/fanta_orange.png",
      spicyLevel: 0,
      isVeg: true,
      isPopular: false
    }
  ],

  recipes: [
    {
      id: "rec1",
      title: "Mom's Goan Fish Curry (Ambot Tik)",
      chef: "Chef Roy",
      prepTime: "20 mins",
      cookTime: "25 mins",
      servings: "4 People",
      spicyLevel: 2,
      image: "https://flipdish.imgix.net/xUxo0GpfFmVXOyPEjkvuhSb2Yjk.jpg",
      quote: "Real cooking is more about following your heart than following recipes.",
      story: "This dish is the beating heart of every Goan home. Taught to me by my mother in Vasco Da Gama, the secret lies in balance: the rich creaminess of freshly grated coconut, the fire of Kashmiri red chilies, and the sharp tang of dried Kokum fruit.",
      ingredients: [
        "500g fresh Kingfish, Salmon or Seabass fillets (cut into thick chunks)",
        "1 cup freshly grated coconut",
        "6-8 dried Kashmiri red chilies (soaked in warm water)",
        "1 tbsp coriander seeds",
        "1 tsp cumin seeds",
        "1/2 tsp turmeric powder",
        "4 cloves of fresh garlic",
        "1 small piece of tamarind pulp",
        "4-5 pieces of dried Kokum (or 1 tbsp lemon juice)",
        "2 green chilies (slit lengthwise)",
        "1 medium onion (sliced finely)",
        "Salt to taste & 2 tbsp coconut oil"
      ],
      steps: [
        "Marinate fish chunks with turmeric powder and salt; set aside for 15 minutes.",
        "In a blender, grind grated coconut, soaked red chilies, coriander seeds, cumin, garlic, and tamarind with 1/2 cup warm water into a silky smooth paste.",
        "Heat coconut oil in a clay pot or deep pan. Add sliced onions and green chilies, sautéing until translucent.",
        "Pour the ground coconut spice paste into the pan. Stir well and cook on medium heat for 5 minutes until fragrant.",
        "Add 1 cup of water to reach desired curry consistency and bring to a gentle simmer.",
        "Slide the marinated fish pieces and Kokum into the simmering curry. Do not stir violently; swirl the pot gently.",
        "Cook uncovered for 7-8 minutes until the fish is flaky and tender.",
        "Serve steaming hot over Goan red rice or fragrant basmati."
      ]
    },
    {
      id: "rec2",
      title: "Mapusa Chicken Xacuti",
      chef: "Chef Roy",
      prepTime: "25 mins",
      cookTime: "35 mins",
      servings: "4-5 People",
      spicyLevel: 2,
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
      quote: "Xacuti requires patience: dry-roasting every spice individually until the kitchen fills with smoke and aroma.",
      story: "Xacuti is a masterclass in spice blend chemistry. Made with up to 14 spices dry-roasted alongside fresh coconut until golden brown, giving the curry its signature dark mahogany color and deep earthy notes.",
      ingredients: [
        "700g chicken breast or bone-in thighs (cut into bite sizes)",
        "1.5 cups freshly grated coconut",
        "2 tbsp poppy seeds (khus khus)",
        "1 star anise & 1 cinnamon stick",
        "4 cloves & 4 green cardamoms",
        "1 tbsp white sesame seeds",
        "1 tbsp coriander seeds & 1 tsp fennel seeds",
        "1/2 tsp nutmeg powder",
        "2 large onions (1 sliced, 1 finely diced)",
        "1 tbsp ginger-garlic paste",
        "1 tsp Kashmiri red chili powder",
        "Fresh coriander & lemon juice to finish"
      ],
      steps: [
        "Marinate chicken with ginger-garlic paste, chili powder, turmeric, and salt for 30 minutes.",
        "In a dry skillet over low flame, individually roast star anise, cinnamon, cloves, cardamom, poppy seeds, sesame seeds, coriander, and fennel until fragrant. Set aside.",
        "In the same skillet, roast 1 sliced onion and grated coconut with a drop of oil until deep golden brown.",
        "Blend the roasted spices, roasted coconut, and onion together with water into a thick spice paste (Xacuti Masala).",
        "In a large pot, heat oil, add diced onion and cook until golden.",
        "Add marinated chicken and sear on high heat for 5 minutes.",
        "Pour in the Xacuti masala paste, stir well to coat chicken, then add 1.5 cups water.",
        "Cover and simmer on low heat for 25 minutes until chicken is tender.",
        "Garnish with chopped fresh cilantro and a squeeze of fresh lime juice."
      ]
    },
    {
      id: "rec3",
      title: "Chef Fernando's Pork Vindaloo",
      chef: "Chef Roy & Valentina",
      prepTime: "30 mins (plus overnight marinade)",
      cookTime: "45 mins",
      servings: "4 People",
      spicyLevel: 3,
      image: "https://flipdish.imgix.net/NyTySuZVCViasG2QBWGd6bYbeg.jpg",
      quote: "Vindaloo is not just hot—it is a harmonious dance of toddy vinegar tang and caramelized garlic sweetness.",
      story: "Derived from the Portuguese 'Carne de Vinha d'Alhos' (meat marinated in wine vinegar and garlic), Goan cooks adapted it with Kashmiri red chilies and palm vinegar. It tastes even better the next day!",
      ingredients: [
        "600g pork shoulder (cut into bite-sized cubes)",
        "4 tbsp Goan toddy vinegar (or red wine vinegar)",
        "10 dried Kashmiri red chilies",
        "8 cloves garlic & 1 inch ginger",
        "1 tsp cumin seeds & 1/2 tsp black peppercorns",
        "1 cinnamon stick & 4 cloves",
        "1 tsp mustard seeds",
        "1 tbsp palm sugar or jaggery",
        "2 large onions (sliced)",
        "3 tbsp oil & salt to taste"
      ],
      steps: [
        "Soak Kashmiri red chilies, garlic, ginger, cumin, peppercorns, cinnamon, cloves, and mustard seeds in vinegar for 30 minutes.",
        "Blend the soaked ingredients into a smooth, pungent red paste (Vindaloo paste).",
        "Coat pork cubes thoroughly with the Vindaloo paste, jaggery, and salt. Cover and refrigerate overnight (at least 4 hours).",
        "Heat oil in a heavy-bottomed pot. Add sliced onions and cook slowly until deep golden brown.",
        "Add marinated pork along with all marinade. Stir-fry on medium-high heat for 8-10 minutes to sear the meat.",
        "Add 1 cup of warm water, cover tightly with a lid, and turn heat down to low.",
        "Simmer gently for 35-40 minutes until pork is melt-in-the-mouth tender.",
        "Adjust salt and vinegar balance. Rest 15 minutes before serving with hot basmati or poi bread."
      ]
    },
    {
      id: "rec4",
      title: "Miramar Sev Papdi Chaat",
      chef: "Chef Valentina",
      prepTime: "15 mins",
      cookTime: "10 mins",
      servings: "2-3 People",
      spicyLevel: 1,
      image: "https://flipdish.imgix.net/Pdf0HioYBrjenmGtT8VwAEi2OK4.jpg",
      quote: "The street food spirit of Panjim's Miramar beach—crispy, sweet, sour, and spicy in every single bite!",
      story: "Walking along Miramar beach in North Goa, the air is filled with the aroma of freshly fried papdis and spiced potatoes. Valentina brings this lively coastal street food straight to Edinburgh.",
      ingredients: [
        "12 crisp flat flour papdis",
        "2 boiled potatoes (mashed and spiced with chat masala)",
        "1/2 cup boiled chickpeas",
        "1/2 cup sweet tamarind & date chutney",
        "1/2 cup fresh mint & coriander chutney",
        "1/2 cup thick sweetened yogurt (whipped)",
        "1/2 cup fine nylon sev",
        "2 tbsp fresh pomegranate seeds",
        "1 tsp chaat masala & red chili powder",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Arrange flat papdis in a single layer on a serving platter.",
        "Top each papdi with a spoonful of spiced mashed potato and boiled chickpeas.",
        "Drizzle generously with whipped sweetened yogurt.",
        "Spoon sweet tamarind chutney and spicy green mint chutney over the top.",
        "Dust with chaat masala and Kashmiri red chili powder.",
        "Cover generously with crunchy nylon sev and fresh pomegranate seeds.",
        "Serve immediately for maximum crunch and flavor explosion!"
      ]
    }
  ],

  testimonials: [
    {
      quote: "Go Goa is an absolute gem in Edinburgh! The Mom's Goan Fish Curry transported me straight back to Palolem beach. Fresh ingredients, balanced spices, and top-tier service.",
      author: "David M.",
      location: "Portobello, Edinburgh",
      rating: 5
    },
    {
      quote: "Hands down the best Goan food in Scotland! The Pork Vindaloo had authentic toddy vinegar tang and the Sev Papdi Chaat was addictively fresh.",
      author: "Sarah L.",
      location: "Leith, Edinburgh",
      rating: 5
    },
    {
      quote: "Order arrived hot and fresh in under 35 mins. The 10% online discount code worked instantly. Chicken Xacuti and Garlic Naan were phenomenal!",
      author: "James K.",
      location: "Duddingston, Edinburgh",
      rating: 5
    }
  ]
};
