import { HomeRoutingModule } from './home.routring';

import { QuerySubjectComponent } from './query-subject/query-subject.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    
  ],
  declarations: [Tab1Page,QuerySubjectComponent]
})
export class Tab1PageModule {}
