import {ChangeDetectorRef, Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {DemoService} from "../../services/demo.service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contactInfo=[];

  constructor(public navCtrl: NavController,
              private demoService: DemoService,
              private ref: ChangeDetectorRef,) {

  }

  ionViewDidLoad() {
    // 网络请求
    this.getRequestContact();
  }

  getRequestContact(){
    this.demoService.getRequestContact()
      .subscribe(res => {
        this.contactInfo = res.json();
        console.log("contactInfo------->",this.contactInfo);
        this.ref.detectChanges();
      }, error => {
        console.log(error);
      });
  }
}
