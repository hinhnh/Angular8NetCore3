import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sub2CounterRoutingModule } from './sub2-routing.module';
import { Sub2CounterComponent } from './sub2-counter.component';


@NgModule({
  declarations: [Sub2CounterComponent],
  imports: [
    CommonModule,
    Sub2CounterRoutingModule
  ]
})
export class Sub2CounterModule { }
