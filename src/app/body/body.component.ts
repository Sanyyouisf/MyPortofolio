import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  // templateUrl: './body.component.html',
  template: `<div> the tittle is : {{tittle}}</div>
  <div> multiple lines</div>
  <div>this is the template body ... take care </div>
  <h1> {{greeting()}}</h1>
  <h2> the site url : {{siteUrl}}</h2>
  <input id="{{myId}}" type='text' value='sany'>
  <h2 [class.text-danger]="hasError"> the error in red</h2>
  <h2 [ngClass]="messageClass" > this is ng attribute class</h2>
  <h2 [ngClass]=" hasError == true ? 'text-danger' : 'text-success'" > this is ng attribute class</h2>
  <h3 [style.color]="'purple'"> style binding </h3>
  <button (click) = "whenClicked()"> Greeting</button>
  <input (keyup) = "OnKeyUp($event)" type='text'>
  <p>{{values}}</p>
 `,
  styles: [`
  .text-danger {
    color: red;
  }
  .text-success {
    color: green;
  }
  .text-special {
    font-style: Italic;
  }
  `]
})
export class BodyComponent implements OnInit {
public tittle = 'the body tittle';
public name = 'Sany';
public hasError = false;
public isSpecial = true;
public values = '';
// public textValue = 'text text value';
public messageClass = {
  "text-success": !this.hasError,
  "text-danger" : this.hasError,
  "text-special": this.isSpecial

}
// create new property
public myId = 'testId';
public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
    // this.greeting();
  }

whenClicked()
  {
  console.log("wellcome Sany")
}

  greeting()
  {
    return "Hello  "+ this.name;
  }

  OnKeyUp(event :any)
  {
    this.values = event.target.value;
  }
}
