import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../services/data';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  orders: any[];

  constructor(public navCtrl: NavController, private dataService: DataService) {}

  ionViewDidLoad() {
    this.orders = this.dataService.getOrders();
  }

  viewOrder(order) {
    console.log('Viewing order details:', order);
    // Implement logic to view order details
  }
}
