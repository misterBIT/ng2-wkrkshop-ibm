import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
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
