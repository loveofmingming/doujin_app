import { QuerySubjectComponent } from './query-subject/query-subject.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
    {path: '', redirectTo: 'home',  pathMatch: 'full' },
    { path: 'home', component: Tab1Page },
    { path: 'query', component: QuerySubjectComponent },
    { path: 'businessManage', loadChildren:'../tab2/tab2.module#Tab2PageModule'},
    { path: 'myCert', loadChildren: '../tab3/tab3.module#Tab3PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
