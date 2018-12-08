import { Component } from '@angular/core';

/**
 * Generated class for the ListceshiComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'listceshi',
  templateUrl: 'listceshi.html'
})
export class ListceshiComponent {

  text: string;
  public list=[];
  constructor() {
    console.log('Hello ListceshiComponent Component');
    this.text = 'Hello World';


    for(var i=0;i<10;i++)
    {
        this.list.push('no:'+i+'data');
    }
  }

}
