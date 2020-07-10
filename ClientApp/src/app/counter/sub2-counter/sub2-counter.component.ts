import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sub2-counter',
  templateUrl: './sub2-counter.component.html',
  styleUrls: ['./sub2-counter.component.css']
})
export class Sub2CounterComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  subId: number;

  ngOnInit() {

    let id = this.route.snapshot.params["id"];
    let id1 = this.route.snapshot.params.id;
    this.subId = +id;
  
  }

}
