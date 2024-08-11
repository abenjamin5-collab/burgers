import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private menu = [
    { id: 1, name: 'Cheeseburger', price: 5.99, description: 'Delicious cheeseburger with fresh ingredients' },
    { id: 2, name: 'Bacon Burger', price: 6.99, description: 'Tasty bacon burger with crispy bacon' },
    { id: 3, name: 'Veggie Burger', price: 5.49, description: 'Healthy veggie burger with fresh vegetables' }
  ];

  private cart = [];

  private orders = [
    { id: 1, date: '2024-07-01', total: 15.97, items: [this.menu[0], this.menu[1]] },
    { id: 2, date: '2024-07-02', total: 10.98, items: [this.menu[2], this.menu[0]] }
  ];

  private user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890'
  };

  getMenu() {
    return this.menu;
  }

  getCart() {
    return this.cart;
  }

  getOrders() {
    return this.orders;
  }

  getUser() {
    return this.user;
  }

  addToCart(item) {
    this.cart.push(item);
  }

  removeFromCart(item) {
    let index = this.cart.indexOf(item);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  clearCart() {
    this.cart = [];
  }
}
