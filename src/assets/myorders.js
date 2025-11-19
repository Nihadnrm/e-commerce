const orders = [
  {
    orderId: "ORD-2024-001",
    orderDate: "2024-11-15",
    status: "Delivered",
    totalAmount: 159.98,
    paymentMethod: "Credit Card",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      phone: "+1 (555) 123-4567"
    },
    items: [
      {
        productId: 1,
        productName: "Wireless Bluetooth Headphones",
        quantity: 2,
        price: 79.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200"
      }
    ],
    deliveryDate: "2024-11-18",
    trackingNumber: "TRK123456789"
  },
  {
    orderId: "ORD-2024-002",
    orderDate: "2024-11-12",
    status: "Shipped",
    totalAmount: 874.97,
    paymentMethod: "PayPal",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      phone: "+1 (555) 123-4567"
    },
    items: [
      {
        productId: 3,
        productName: "Laptop 15.6 inch",
        quantity: 1,
        price: 899.99,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200"
      },
      {
        productId: 8,
        productName: "Hooded Sweatshirt",
        quantity: 2,
        price: 44.99,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200"
      }
    ],
    estimatedDelivery: "2024-11-22",
    trackingNumber: "TRK987654321"
  },
  {
    orderId: "ORD-2024-003",
    orderDate: "2024-11-10",
    status: "Delivered",
    totalAmount: 249.99,
    paymentMethod: "Debit Card",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      phone: "+1 (555) 123-4567"
    },
    items: [
      {
        productId: 4,
        productName: "Smart Watch",
        quantity: 1,
        price: 249.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200"
      }
    ],
    deliveryDate: "2024-11-14",
    trackingNumber: "TRK456789123"
  },
  {
    orderId: "ORD-2024-004",
    orderDate: "2024-11-08",
    status: "Processing",
    totalAmount: 314.96,
    paymentMethod: "Credit Card",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      phone: "+1 (555) 123-4567"
    },
    items: [
      {
        productId: 10,
        productName: "Winter Jacket",
        quantity: 1,
        price: 129.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200"
      },
      {
        productId: 9,
        productName: "Running Shoes",
        quantity: 2,
        price: 89.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200"
      },
      {
        productId: 5,
        productName: "Wireless Mouse",
        quantity: 1,
        price: 29.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200"
      }
    ],
    estimatedDelivery: "2024-11-25",
    trackingNumber: "TRK789123456"
  },
  {
    orderId: "ORD-2024-005",
    orderDate: "2024-11-05",
    status: "Delivered",
    totalAmount: 119.99,
    paymentMethod: "Google Pay",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      phone: "+1 (555) 123-4567"
    },
    items: [
      {
        productId: 13,
        productName: "Non-Stick Cookware Set",
        quantity: 1,
        price: 119.99,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200"
      }
    ],
    deliveryDate: "2024-11-09",
    trackingNumber: "TRK321654987"
  },
  {
    orderId: "ORD-2024-006",
    orderDate: "2024-11-03",
    status: "Cancelled",
    totalAmount: 699.99,
    paymentMethod: "Credit Card",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      phone: "+1 (555) 123-4567"
    },
    items: [
      {
        productId: 2,
        productName: "Smartphone 5G",
        quantity: 1,
        price: 699.99,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200"
      }
    ],
    cancellationDate: "2024-11-04",
    cancellationReason: "Changed my mind"
  },
  {
    orderId: "ORD-2024-007",
    orderDate: "2024-11-01",
    status: "Delivered",
    totalAmount: 209.97,
    paymentMethod: "PayPal",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      phone: "+1 (555) 123-4567"
    },
    items: [
      {
        productId: 11,
        productName: "Coffee Maker",
        quantity: 1,
        price: 79.99,
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=200"
      },
      {
        productId: 12,
        productName: "Blender",
        quantity: 1,
        price: 49.99,
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=200"
      },
      {
        productId: 23,
        productName: "Facial Moisturizer",
        quantity: 3,
        price: 29.99,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200"
      }
    ],
    deliveryDate: "2024-11-06",
    trackingNumber: "TRK654987321"
  },
  {
    orderId: "ORD-2024-008",
    orderDate: "2024-10-28",
    status: "Delivered",
    totalAmount: 149.99,
    paymentMethod: "Credit Card",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      phone: "+1 (555) 123-4567"
    },
    items: [
      {
        productId: 20,
        productName: "Camping Tent",
        quantity: 1,
        price: 149.99,
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=200"
      }
    ],
    deliveryDate: "2024-11-02",
    trackingNumber: "TRK147258369"
  },
  {
    orderId: "ORD-2024-009",
    orderDate: "2024-10-25",
    status: "Returned",
    totalAmount: 159.99,
    paymentMethod: "Debit Card",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      phone: "+1 (555) 123-4567"
    },
    items: [
      {
        productId: 14,
        productName: "Vacuum Cleaner",
        quantity: 1,
        price: 159.99,
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=200"
      }
    ],
    deliveryDate: "2024-10-29",
    returnDate: "2024-11-05",
    returnReason: "Product defective",
    refundAmount: 159.99,
    trackingNumber: "TRK963852741"
  },
  {
    orderId: "ORD-2024-010",
    orderDate: "2024-10-20",
    status: "Delivered",
    totalAmount: 84.97,
    paymentMethod: "Apple Pay",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      phone: "+1 (555) 123-4567"
    },
    items: [
      {
        productId: 26,
        productName: "Building Blocks Set",
        quantity: 1,
        price: 39.99,
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=200"
      },
      {
        productId: 27,
        productName: "Board Game Classic",
        quantity: 1,
        price: 24.99,
        image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=200"
      },
      {
        productId: 19,
        productName: "Yoga Mat",
        quantity: 1,
        price: 29.99,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=200"
      }
    ],
    deliveryDate: "2024-10-24",
    trackingNumber: "TRK258369147"
  }
];

// Order status options
const orderStatuses = [
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
  "Returned"
];

// Helper function to get orders by status
function getOrdersByStatus(status) {
  return orders.filter(order => order.status === status);
}

// Helper function to calculate total spent
function getTotalSpent() {
  return orders
    .filter(order => order.status !== "Cancelled" && order.status !== "Returned")
    .reduce((total, order) => total + order.totalAmount, 0);
}

// Helper function to get recent orders
function getRecentOrders(limit = 5) {
  return orders.slice(0, limit);
}

// Helper function to search orders by order ID
function searchOrderById(orderId) {
  return orders.find(order => order.orderId === orderId);
}

// Export for use
export { 
  orders, 
  orderStatuses, 
  getOrdersByStatus, 
  getTotalSpent, 
  getRecentOrders, 
  searchOrderById 
};