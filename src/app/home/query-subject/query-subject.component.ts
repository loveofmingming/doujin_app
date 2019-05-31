import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-query-subject',
  templateUrl: './query-subject.component.html',
  styleUrls: ['./query-subject.component.scss'],
})
export class QuerySubjectComponent implements OnInit {

  searchValue: string;
  geohash: string;
  restaurantList: any[];
  emptyResult: boolean;
  searchHistory: any[];
  showHistory: boolean;

  constructor(public route: ActivatedRoute,
    public router: Router,
    private toastCtrl:ToastController,) {
    this.geohash = this.route.snapshot.queryParamMap.get('geohash');
    this.searchValue = '';
    
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
  searchRestaurants(value?: string) {
    if (value) {
      this.searchValue = value;
    } else if (!this.searchValue) {
     this.toastTip('搜索内容不能为空')
      return;
    }else
    this.router.navigate(['home']);
 
  }

  checkInput() {
    if (this.searchValue === '') {
     
    }
  }


  toShop(place: any) {
    this.router.navigate(['msite'], { queryParams: { geohash: place.geohash } });
  }

  back() {
    window.history.back();
  }

}
