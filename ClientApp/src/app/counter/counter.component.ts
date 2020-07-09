import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  constructor(private router: Router) { }

  public incrementCounter() {
    this.currentCount++;
  }

  gotoSubcounter(url, id) {
   
    var myurl = `${url}/${id}`;
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });


  }

}
