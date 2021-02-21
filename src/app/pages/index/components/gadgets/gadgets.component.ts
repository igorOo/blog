import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {TopPost} from "../../interfaces/TopPost";

@Component({
    selector: 'app-gadgets',
    templateUrl: './gadgets.component.html',
    styleUrls: ['./gadgets.component.scss']
})
export class GadgetsComponent implements OnInit {
    public loading: boolean = false
    @Input() list: Array<TopPost> = []

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void{
        if (changes.list.currentValue){
            this.list = changes.list.currentValue
        }
        console.log(this.list)
    }

}
