// product class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
// ShoppingCartItem class
class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate the total price of the item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  

//   ShoppingCart class
class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to get the total of items inside the cart
    getTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    // Method to add items to the cart
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    // Method to remove items from the cart
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to display cart items
    displayItems() {
      this.items.forEach(item => {
        console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice().toFixed(2)}`);
      });
    }
  }

  
  // Create products
const product1 = new Product(1, 'Laptop', 999.99);
const product2 = new Product(2, 'Smartphone', 499.99);
const product3 = new Product(3, 'Headphones', 89.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1); // 1 Laptop
cart.addItem(product2, 2); // 2 Smartphones
cart.addItem(product3, 3); // 3 Headphones

// Display the cart
console.log('Cart Items:');
cart.displayItems();
console.log(`Total Cart Price: $${cart.getTotal().toFixed(2)}`);

// Remove an item from the cart
cart.removeItem(product2.id); // Remove all Smartphones

// Display the cart after removal
console.log('\nCart Items After Removal:');
cart.displayItems();
console.log(`Total Cart Price After Removal: $${cart.getTotal().toFixed(2)}`);
