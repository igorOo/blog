import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {TopPost} from "../../interfaces/TopPost";

@Component({
    selector: 'app-hardware',
    templateUrl: './hardware.component.html',
    styleUrls: ['./hardware.component.scss']
})
export class HardwareComponent implements OnInit {
    @Input() inputData: Array<TopPost> = []

    public list: Array<TopPost> = []
    public loading: boolean = false

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.inputData.currentValue){
            this.list = changes.inputData.currentValue
        }
    }

}
