import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './home.routing';
import { HomeComponent } from './home.component';
import { SubHomeComponent } from './sub-home/sub-home.component';

@NgModule({
  declarations: [
    HomeComponent,
    SubHomeComponent
  ],
  imports: [
   routing,
   CommonModule] ,
  providers: []
})
export class HomeModule {}
