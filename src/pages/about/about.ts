import {ChangeDetectorRef, Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {DemoService} from "../../services/demo.service";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  // 接收数据用
  listData: Object;
  // 依赖注入
  constructor(public navCtrl: NavController,
              private ref: ChangeDetectorRef,
              private demoService: DemoService,) {
  }

  ionViewDidLoad() {
    // 网络请求
    this.getAboutInfo();
  }

  getAboutInfo(){
    this.demoService.getAboutInfo()
      .subscribe(res => {
        this.listData = res.json();
        // 数据格式请看log
        console.log("listData------->",this.listData);
        this.ref.detectChanges();
      }, error => {
        console.log(error);
      });
  }
}

