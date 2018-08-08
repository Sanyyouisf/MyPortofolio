import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  // templateUrl: './body.component.html',
  template: `<div> the tittle is : {{tittle}}</div>
  <div> multiple lines</div>
  <div>this is the template body ... take care </div>`,
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
tittle = 'the body tittle';
  constructor() { }

  ngOnInit() {
  }

}
