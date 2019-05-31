import { LoginBean } from './login-bean';
import { HttpServiceService } from './../service/http-service.service';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showBackButton = false;
  loading = false;
  login = {
      username: 'test',
      password: '123456'
  };

  constructor(public nav: NavController,
           public router:Router,
           private toastCtrl:ToastController,
           public dataService:HttpServiceService
            ) {
  }

  ngOnInit() {
    
  }
  async toastTip(message: string) {
    const toast = await this.toastCtrl.create({
        message: message,
        duration: 2000,
        position: 'middle'
      });
    toast.present();
  }
  formSubmit() {
    if (!this.login.username) {
      this.toastTip('请填写用户名');
      return;
    }
    if (!this.login.password) {
      this.toastTip('请填写密码');
      return;
    }
    let loginbean=LoginBean.getLoginIn();
    loginbean.userName=this.login.username;
    loginbean.password=this.login.password;
    // this.dataService.login(this.login.username,this.login.password).subscribe(res=>{

    // })
     this.router.navigate(['home'])
          // this.nav.navigateRoot(['home']);
  }

  findPassword() {
     
  }

}
