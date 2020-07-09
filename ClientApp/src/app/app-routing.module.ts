import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PaymentComponent } from './payment/payment.component';



const routes: Routes = [


  { path: '', component: HomeComponent, pathMatch: 'full' },  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule //Lazy load module by router
  },

  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'payment', component: PaymentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


