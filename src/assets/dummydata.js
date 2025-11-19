const products = [
  // Electronics
  
  {
    id: 2,
    name: "Smartphone 5G",
    category: "Electronics",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    description: "Latest model with 128GB storage and triple camera",
    stock: 23,
    rating: 4.7
  },
  {
    id: 3,
    name: "Laptop 15.6 inch",
    category: "Electronics",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    description: "Intel i7, 16GB RAM, 512GB SSD",
    stock: 15,
    rating: 4.6
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description: "Fitness tracking, heart rate monitor, GPS",
    stock: 67,
    rating: 4.4
  },
  {
    id: 5,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    description: "Ergonomic design with USB receiver",
    stock: 120,
    rating: 4.3
  },

  // Clothing
  {
    id: 6,
    name: "Men's Cotton T-Shirt",
    category: "Clothing",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    description: "100% cotton, available in multiple colors",
    stock: 200,
    rating: 4.2
  },
  {
    id: 7,
    name: "Women's Denim Jeans",
    category: "Clothing",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    description: "Slim fit, stretch denim fabric",
    stock: 85,
    rating: 4.5
  },
  {
    id: 8,
    name: "Hooded Sweatshirt",
    category: "Clothing",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    description: "Warm fleece lining, kangaroo pocket",
    stock: 95,
    rating: 4.6
  },
  {
    id: 9,
    name: "Running Shoes",
    category: "Clothing",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description: "Lightweight, breathable mesh upper",
    stock: 50,
    rating: 4.7
  },
  {
    id: 10,
    name: "Winter Jacket",
    category: "Clothing",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    description: "Water-resistant, insulated for cold weather",
    stock: 35,
    rating: 4.8
  },

  // Home & Kitchen
  {
    id: 11,
    name: "Coffee Maker",
    category: "Home & Kitchen",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500",
    description: "12-cup programmable coffee maker",
    stock: 40,
    rating: 4.4
  },
  {
    id: 12,
    name: "Blender",
    category: "Home & Kitchen",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500",
    description: "600W motor, multiple speed settings",
    stock: 55,
    rating: 4.3
  },
  {
    id: 13,
    name: "Non-Stick Cookware Set",
    category: "Home & Kitchen",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
    description: "10-piece set, dishwasher safe",
    stock: 28,
    rating: 4.6
  },
  {
    id: 14,
    name: "Vacuum Cleaner",
    category: "Home & Kitchen",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500",
    description: "Bagless, HEPA filter, 2L capacity",
    stock: 22,
    rating: 4.5
  },
  {
    id: 15,
    name: "Bed Sheet Set",
    category: "Home & Kitchen",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500",
    description: "Queen size, 100% microfiber",
    stock: 75,
    rating: 4.4
  },

  // Books
  {
    id: 16,
    name: "The Great Novel",
    category: "Books",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
    description: "Bestselling fiction novel",
    stock: 100,
    rating: 4.7
  },
  {
    id: 17,
    name: "Cooking Masterclass",
    category: "Books",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500",
    description: "Professional cooking techniques guide",
    stock: 60,
    rating: 4.6
  },
  {
    id: 18,
    name: "Self-Help Guide",
    category: "Books",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    description: "Transform your life in 90 days",
    stock: 88,
    rating: 4.5
  },

  // Sports & Outdoors
  {
    id: 19,
    name: "Yoga Mat",
    category: "Sports & Outdoors",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
    description: "Non-slip, extra thick padding",
    stock: 110,
    rating: 4.5
  },
  {
    id: 20,
    name: "Camping Tent",
    category: "Sports & Outdoors",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500",
    description: "4-person, waterproof, easy setup",
    stock: 18,
    rating: 4.7
  },
  {
    id: 21,
    name: "Dumbbell Set",
    category: "Sports & Outdoors",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=500",
    description: "Adjustable weight, 5-25 lbs",
    stock: 42,
    rating: 4.6
  },
  {
    id: 22,
    name: "Basketball",
    category: "Sports & Outdoors",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500",
    description: "Official size, indoor/outdoor use",
    stock: 65,
    rating: 4.4
  },

  // Beauty & Personal Care
  {
    id: 23,
    name: "Facial Moisturizer",
    category: "Beauty & Personal Care",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500",
    description: "Hydrating formula, all skin types",
    stock: 90,
    rating: 4.5
  },
  {
    id: 24,
    name: "Electric Shaver",
    category: "Beauty & Personal Care",
    price: 69.99,
    image: "https://thumbs.dreamstime.com/b/electric-shaver-white-background-isolated-close-up-76751918.jpg",
    description: "Waterproof, rechargeable battery",
    stock: 38,
    rating: 4.4
  },
  {
    id: 25,
    name: "Hair Dryer",
    category: "Beauty & Personal Care",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500",
    description: "Ionic technology, 3 heat settings",
    stock: 52,
    rating: 4.3
  },

  // Toys & Games
  {
    id: 26,
    name: "Building Blocks Set",
    category: "Toys & Games",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500",
    description: "500 pieces, ages 6+",
    stock: 70,
    rating: 4.7
  },
  {
    id: 27,
    name: "Board Game Classic",
    category: "Toys & Games",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500",
    description: "Family fun, 2-6 players",
    stock: 85,
    rating: 4.6
  },
  {
    id: 28,
    name: "Remote Control Car",
    category: "Toys & Games",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
    description: "High-speed racing, rechargeable",
    stock: 45,
    rating: 4.5
  },

  // Groceries
  {
    id: 29,
    name: "Organic Almonds",
    category: "Groceries",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500",
    description: "Raw, unsalted, 1 lb bag",
    stock: 150,
    rating: 4.6
  },
  {
    id: 30,
    name: "Olive Oil",
    category: "Groceries",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500",
    description: "Extra virgin, cold pressed, 500ml",
    stock: 100,
    rating: 4.7
  },
  
   {
    id: 15,
    name: "Bed Sheet Set",
    category: "Home & Kitchen",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500",
    description: "Queen size, 100% microfiber",
    stock: 75,
    rating: 4.4
  },
  {
    id: 25,
    name: "Hair Dryer",
    category: "Beauty & Personal Care",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500",
    description: "Ionic technology, 3 heat settings",
    stock: 52,
    rating: 4.3
  },
   {
    id: 6,
    name: "Men's Cotton T-Shirt",
    category: "Clothing",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    description: "100% cotton, available in multiple colors",
    stock: 200,
    rating: 4.2
  }
];

// Helper function to get products by category
function getProductsByCategory(category) {
  return products.filter(product => product.category === category);
}

// Helper function to get all categories
function getAllCategories() {
  return [...new Set(products.map(product => product.category))];
}

// Helper function to search products
function searchProducts(query) {
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
}

// Export for use
export { products, getProductsByCategory, getAllCategories, searchProducts };