import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Pets R Us</h1>
        <button (click)="foo($event)">Click This</button>
        <pet-list></pet-list>
        <pet-input></pet-input>


    `
})
export class AppComponent {
  private subtitle : string = 'Welcome!';

  constructor() {
    setTimeout(()=>this.subtitle='Whats this?', 2000);
  }

  whenClicked() {
    alert(this.subtitle);
  }

  foo(ev : any) {
    console.log(ev);
  }


 }
