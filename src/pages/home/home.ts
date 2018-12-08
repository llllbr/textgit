import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
   num1: number;
　 num2: number;
   ans: number;
   op: string;
  constructor(public navCtrl: NavController) {
    
  }
  jsq(op) 
  {
    var a = this.num1;
    var b = this.num2;
 
    switch (op) {
    case "+":
    this.ans=a+b;
   
      break;
    case "-":

    this.ans=a-b; 
  
      break;
    case "*":
    this.ans=a*b;
   
      break;
    case "/":
      if (b == 0) {
        alert("除数不能为0");
      } else {
        this.ans=Math.round((a / b) * 100) / 100;
    
      }
    }
  }


}
