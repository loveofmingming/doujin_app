import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private camera: Camera,
    private actionSheetController:ActionSheetController) {}
  
  // image_url:string
  image_url = 'https://fuss10.elemecdn.com';

  cameraOption(type:number){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: type
    }
    this.camera.getPicture(options).then((imageData) => {
    
      this.image_url = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
     
     });
  }
  openCamare(){
    this.presentActionSheet()
    // this.cameraOption(this.camera.PictureSourceType.CAMERA);
    
  }
  // openAlbum(){
  //   this.cameraOption(this.camera.PictureSourceType.SAVEDPHOTOALBUM);
  // }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '添加图片',
      buttons: [{
        text: '相机',
        icon: 'camera',
        handler: () => {
          this.cameraOption(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: '相册',
        icon: 'image',
      
        handler: () => {
          this.cameraOption(this.camera.PictureSourceType.SAVEDPHOTOALBUM);
        }
      }]
    });
    await actionSheet.present();
  }

}
