import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule,JsonpModule } from '@angular/http';


//引入component组件
import { ComponentsModule } from '../components/components.module';

//引入根组件
import { MyApp } from './app.component';


//页面自定义组件
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';
import { RePage } from '../pages/re/re';

//ionic打包成app以后配置启动画面，导航条
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { ReviceServeProvider } from '../providers/revice-serve/revice-serve';
import { StorageProvider } from '../providers/storage/storage';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [     //申明组件
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ListPage,
    RePage,
    TabsPage
  ],
  imports: [     // 引入的模块 依赖的模块
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    HttpModule,
    JsonpModule, 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],//启动的模块
  entryComponents: [    //配置不会在模板中使用的组件
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ListPage,
    RePage,
    TabsPage
  ],
  providers: [//配置服务
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    ReviceServeProvider,
    StorageProvider
  ]
})
export class AppModule {}
