import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {TopPost} from "../../interfaces/TopPost";

@Component({
    selector: 'app-worldandauto',
    templateUrl: './worldandauto.component.html',
    styleUrls: ['./worldandauto.component.scss']
})
export class WorldandautoComponent implements OnInit {

    @Input() data: any
    public loading: boolean = false
    public list: Map<number, Array<TopPost>> = new Map<number, Array<TopPost>>()
    public slideConfig = {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": false,
        "prevArrow": '',
        "nextArrow": ''
    };

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges):void {
        if (changes.data.currentValue && Object.keys(changes.data.currentValue).length){
            Object.keys(changes.data.currentValue).map((key:any) => {
                this.list.set(key, changes.data.currentValue[key])
            })
            this.loading = false
            console.log(this.list)
        }
    }
}
