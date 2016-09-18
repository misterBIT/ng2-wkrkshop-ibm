import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {PetModel} from './pet.model';

@Component({
  moduleId: module.id,
  selector: 'pet',
  template:
  `
    <style>
        img {max-width:200px;}
        .awake {color:gold}
    </style>
    <section [class.awake]="petModel.awake"  >
        <h4>{{petModel.name | uppercase}}</h4>
        <countdown [isAwake]="petModel.isAwake" [inputTime]="petModel.nextFeedAt" (due)="feedingDue()"></countdown>
        <img [src]="petModel.imgUrl" alt="">
        <input type="checkbox" [value]="petModel.awake" (change)="toggle.emit(petModel)" /> Awake?
    </section>
  `
})
export class PetComponent {

    private time : any;

    ngOnInit(){   }

    @Input()
    petModel : PetModel;

    @Output()
    toggle = new EventEmitter();


    feedingDue() {
        console.log('Pet is going to sleep!');
        this.petModel.awake = false;
    }

}
