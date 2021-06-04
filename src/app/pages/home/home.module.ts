import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {RouterModule,Routes} from '@angular/router'
const routes:Routes =[
  {
    path:'home',
    loadChildren:() => import ('./home/home.module').then(n => n.HomePageModules)
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
]
@NgModule({
  imports: [
    routes,
    RouterModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
