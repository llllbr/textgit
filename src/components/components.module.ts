import { NgModule } from '@angular/core';
import { ListceshiComponent } from './listceshi/listceshi';
import { BrowserModule } from '@angular/platform-browser';
import { YunsuanComponent } from './yunsuan/yunsuan';


@NgModule({
	declarations: [ListceshiComponent,
    YunsuanComponent],
	imports: [BrowserModule],
	exports: [ListceshiComponent,
    YunsuanComponent]
})
export class ComponentsModule {}
