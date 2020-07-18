import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './home.routing';
import { HomeComponent } from './home.component';
import { SubHomeComponent } from './sub-home/sub-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    HomeComponent,
    SubHomeComponent
  ],
  imports: [
    routing,
    NgbModule,
    CommonModule] ,
  providers: []
})
export class HomeModule {}
