import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../services/data';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  menu: any[];

  constructor(public navCtrl: NavController, private dataService: DataService) { }

  ionViewDidLoad() {
    this.menu = this.dataService.getMenu();
  }

  addToCart(item) {
    console.log('Item added to cart:', item);
  }
}
