import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public router: Router,
    private barcodeScanner: BarcodeScanner,
    ) { }

  businessManage() {
    this.router.navigate(['businessManage'])
  }
  myCert() {
    this.router.navigate(['myCert'])
  }
  subjectQuery() {
    this.router.navigate(['query'])
  }
  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      alert('Barcode data: '+JSON.stringify(barcodeData));
    }).catch(err => {
      alert('Error: '+ err);
    });
  }
}
