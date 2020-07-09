import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent} from './counter.component'

import { CounterRoutingModule } from './counter-routing.module';
import { SubCounterComponent } from './sub-counter/sub-counter.component';


@NgModule({
  declarations: [CounterComponent, SubCounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule
  ]
})
export class CounterModule { }
