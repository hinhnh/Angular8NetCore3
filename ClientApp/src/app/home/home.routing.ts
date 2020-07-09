
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core"
import { HomeComponent } from './home.component';
import { SubHomeComponent } from './sub-home/sub-home.component';

export const routes: Routes = [ 
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sub-home',
    component: SubHomeComponent
  }


];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
