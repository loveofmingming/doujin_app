import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform,AlertController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private alertController:AlertController,
    private nav:NavController
  ) {
    this.initializeApp();
    this.backButtonEvent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
    
    });
  }
//android通过返回按钮退出应用
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  backButtonEvent() {
    this.platform.backButton.subscribe(()=>{
      if (this.router.url.indexOf('home')>-1||this.router.url.indexOf('login')>-1||this.router.url.indexOf('tab3')>-1) {
        if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
          navigator['app'].exitApp(); //退出APP
          } else {
          this.presentAlertConfirm();
          this.lastTimeBackPress = new Date().getTime();
        }
        // navigator['app'].exitApp(); //ionic4 退出APP的方法
      }
    })
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: '您要退出APP吗?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '退出',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });

    await alert.present();
  }
}
