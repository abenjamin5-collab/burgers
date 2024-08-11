import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../services/data';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: any;

  constructor(public navCtrl: NavController, private dataService: DataService) {}

  ionViewDidLoad() {
    this.user = this.dataService.getUser();
  }

  editProfile() {
    console.log('Editing profile for user:', this.user);
    // Implement logic to edit profile
  }
}
