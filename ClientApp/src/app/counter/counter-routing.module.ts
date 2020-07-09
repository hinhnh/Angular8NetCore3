import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter.component';
import { SubCounterComponent } from './sub-counter/sub-counter.component';
const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'sub-counter/:id',
    component: SubCounterComponent
  },
  {
    path: 'sub-counter',
    component: SubCounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
