/**
 * filename: soph_js_code.js
 * This code generates a complex and sophisticated JavaScript program that combines multiple concepts and functionalities.
 * It is an advanced restaurant management system that uses object-oriented programming and various data structures.
 */

class MenuItem {
  constructor(name, price, ingredients) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
  }

  display() {
    console.log(`${this.name} - $${this.price}`);
  }
}

class Menu {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) this.items.splice(index, 1);
  }

  display() {
    console.log("Menu:");
    this.items.forEach((item) => item.display());
  }
}

class Order {
  constructor() {
    this.items = [];
  }

  addItem(item, quantity) {
    this.items.push({ item: item, quantity: quantity });
  }

  removeItem(item, quantity) {
    const index = this.items.findIndex(
      (orderItem) =>
        orderItem.item === item &&
        (!quantity || orderItem.quantity === quantity)
    );
    if (index > -1) this.items.splice(index, 1);
  }

  getTotal() {
    return this.items.reduce(
      (total, orderItem) =>
        total + orderItem.item.price * orderItem.quantity,
      0
    );
  }

  display() {
    console.log("Order:");
    this.items.forEach((orderItem) => {
      console.log(
        `${orderItem.item.name} - $${orderItem.item.price} x ${orderItem.quantity}`
      );
    });
    console.log(`Total: $${this.getTotal()}`);
  }
}

// Create menu items
const item1 = new MenuItem("Pizza", 10, ["cheese", "tomato", "pepperoni"]);
const item2 = new MenuItem("Burger", 8, ["beef patty", "cheese", "lettuce"]);
const item3 = new MenuItem("Salad", 6, ["lettuce", "tomato", "cucumber"]);

// Create menu
const menu = new Menu();
menu.addItem(item1);
menu.addItem(item2);
menu.addItem(item3);

// Display menu
menu.display();

// Create order
const order = new Order();

// Add items to the order
order.addItem(item1, 2);
order.addItem(item2, 1);

// Display order
order.display();

// Remove an item from the order
order.removeItem(item1, 1);

// Display order again
order.display();