import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { CartPage } from '../cart/cart';
import { OrdersPage } from '../orders/orders';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  goToMenu() {
    this.navCtrl.push(MenuPage);
  }

  goToCart() {
    this.navCtrl.push(CartPage);
  }

  goToOrders() {
    this.navCtrl.push(OrdersPage);
  }

  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }
}
