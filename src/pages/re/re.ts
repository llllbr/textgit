import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http,Jsonp} from "@angular/http";
//import { lifecycle } from '@angular/core/src/render3/instructions';
/**
 * Generated class for the RePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-re',
  templateUrl: 're.html',
})
export class RePage {
   public list:any[];
   title="hahaha";
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private http:Http,
    private jsonp:Jsonp) {
  }

  requestData(){
    var _that=this;
    var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"
    this.http.get(url).subscribe(function(data){
        console.log(JSON.parse(data['_body']));
       
      var list= JSON.parse(data['_body']);

     // console.log(_that.list['result']);
     _that.list=list['result'];
     

    },function(err){
      console.log(err);
    })
  }
 
    

  

}
