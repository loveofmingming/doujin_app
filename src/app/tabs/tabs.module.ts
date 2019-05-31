import { RouterModule } from '@angular/router';
import { QuerySubjectComponent } from './../home/query-subject/query-subject.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // TabsPageRoutingModule
    RouterModule.forChild([{ path: '',
    loadChildren: '../home/tab1.module#Tab1PageModule',}])
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
