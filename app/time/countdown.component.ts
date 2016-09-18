import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'countdown',
    template:
        ` <div id="clock">
            <span>Time To Live:</span>
            <div *ngIf="isAwake">{{minRemaining}} : {{(secRemaining < 10 ? '0' : '')  + secRemaining}}</div>
          </div> `
})


export class CountdownComponent implements OnInit {

    //== I/O==
    @Input() inputTime : number;
    @Input() isAwake : boolean;
    @Output() due = new EventEmitter();

    //== Data Members ==
    private msRemaining : number;
    private minRemaining : number = 0;
    private secRemaining : any = 0;
    private countDownInterval : any;

    //== Methods ==
    constructor(){}

    ngOnInit() {
        this.calcTimeRemaining();
        this.countDown();
    }

    calcTimeRemaining(){
        this.msRemaining = this.inputTime - Date.now();
        console.log('msRemaining = ', this.msRemaining);
        this.minRemaining = Math.floor(this.msRemaining / 60000);
        this.secRemaining = ((this.msRemaining % 60000) / 1000).toFixed(0);
    }

    countDown(){
        this.countDownInterval = setInterval(()=>{
            this.msRemaining -= 1000;
            this.calcTimeRemaining();

            if(this.msRemaining <= 0){
                clearInterval(this.countDownInterval);
                this.due.emit({});
            }
        }, 1000);
    }


}