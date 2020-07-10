import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sub2CounterComponent } from './sub2-counter.component';

const routes: Routes = [
  { path: '', component: Sub2CounterComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sub2CounterRoutingModule { }
