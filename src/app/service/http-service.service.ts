import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class HttpServiceService {
  constructor(private http: HttpClient) { }

 

  login(cityId: string, keyword: string): any {
    //  HttpParams是一个不可变对象，每次set都会返回一个新的对象，所以需要链式调用
    const params = new HttpParams()
    
      .set('city_id', cityId)
      .set('keyword', keyword);
    return this.http.get('/app/api/login', { params: params });
  }


}