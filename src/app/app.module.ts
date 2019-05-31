import { Camera } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpServiceService } from './service/http-service.service';

import { TabsPageModule } from './tabs/tabs.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { Platform } from 'ionic-angular/platform/platform';

@NgModule({
  declarations: [AppComponent,LoginComponent],
  entryComponents: [],
  imports: [BrowserModule,
    HttpClientModule, 
    FormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    TabsPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    HttpServiceService,
    BarcodeScanner,
    Camera,
    { provide: RouteReuseStrategy,useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
