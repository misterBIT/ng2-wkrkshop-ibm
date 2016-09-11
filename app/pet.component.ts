import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {PetModel} from './pet.model'

@Component({
  selector: 'pet',
  template: `
        <style>
          img {max-width:200px;}
          .awake {color:gold}
        </style>
        <section [class.awake]="petModel.awake"  >
          <h4>{{petModel.name | uppercase}}</h4>
          <h5>{{4873498 | number}}</h5>
          <img [src]="petModel.imgUrl" alt="">
          <input type="checkbox" [value]="petModel.awake" (change)="toggle.emit(petModel)" /> Awake?
        </section>
  `
})
export class PetComponent {

  @Input()
  petModel : PetModel;

  @Output()
  toggle = new EventEmitter();

}
