import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sub-counter',
  templateUrl: './sub-counter.component.html',
  styleUrls: ['./sub-counter.component.css']
})
export class SubCounterComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  subId: number;

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.subId = +id;
      console.log(id);
    });
  }

}
