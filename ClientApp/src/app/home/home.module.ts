import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './home.routing';
import { HomeComponent } from './home.component';
import { SubHomeComponent } from './sub-home/sub-home.component';

@NgModule({
  imports: [
    routing,
    CommonModule
  ],
  declarations: [
    HomeComponent,
    SubHomeComponent
  ],
  providers: []
})

export class HomeModule {
}
