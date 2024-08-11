import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DataService } from '../../services/data';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  cart: any[];

  constructor(public navCtrl: NavController, private dataService: DataService) {}

  ionViewDidLoad() {
    this.cart = this.dataService.getCart();
  }

  getBurgerImage(name: string): string {
    switch (name) {
      case 'Cheeseburger':
        return 'assets/imgs/cheeseburger.jpg';
      case 'Bacon Burger':
        return 'assets/imgs/baconburger.jpg';
      case 'Veggie Burger':
        return 'assets/imgs/veggieburger.jpg';
      default:
        return 'assets/imgs/default.jpg';
    }
  }

  removeFromCart(item) {
    this.dataService.removeFromCart(item);
    this.cart = this.dataService.getCart();
  }

  checkout() {
    console.log('Proceeding to checkout with items:', this.cart);
    this.dataService.clearCart();
    this.cart = this.dataService.getCart();
  }
}
