import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  arrayObject = ["Học TypeScript", "Học Angular 4", "Học HTML5"];
  superhero: string = "Ironman56575";
  Cars: any[] = [
    {
      "name": "BMW",
      "age": 12,
      "color": 'blue'
    },
    {
      "name": "Ford",
      "age": 15,
      "color": 'yellow'
    },
    {
      "name": "Suzuki",
      "age": 18,
      "color": 'silver'
    },
    {
      "name": "MG Hector",
      "age": 14,
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "age": 8,
      "color": 'green'
    }
  ];

  applygreenstyle: boolean = true;
  borderStyle = '1px solid black';
  appStyleGreen = {
    'color': 'green',
    'font-weight': 'bold',
    'font-size': '45px',
    'borderBottom': this.borderStyle,
    'padding': '1rem'
  };  

  stateFlag: boolean;

  constructor() { }

  ngOnInit() {
  }

  ChangeColor(): void {
    this.applygreenstyle = !this.applygreenstyle;
  }
  
  toggleState() {
    this.stateFlag = !this.stateFlag;
  }

  submit() {
    console.log('Button submitted');
  }

  
  calculateClasses() {
    return {
      'btn': true,
      'btn-primary': true,
      'btn-extra-class': this.stateFlag
    };
  }



}
