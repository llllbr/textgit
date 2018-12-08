import { Component } from '@angular/core';

/**
 * Generated class for the YunsuanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'yunsuan',
  templateUrl: 'yunsuan.html'
})
export class YunsuanComponent {

  text: string;

  constructor() {
    console.log('Hello YunsuanComponent Component');
    this.text = '四则运算计算器';
  }

}
