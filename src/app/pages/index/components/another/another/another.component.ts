import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {TopPost} from "../../../interfaces/TopPost";
import {TopCategoriesListInterface} from "../../../interfaces/TopCategoriesListInterface";

@Component({
    selector: 'app-another',
    templateUrl: './another.component.html',
    styleUrls: ['./another.component.scss']
})
export class AnotherComponent implements OnInit {

    @Input() data: any
    public loading: boolean = true
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
            let slide: Array<TopPost> = new Array<TopPost>()
            Object.keys(changes.data.currentValue).map((key:any) => {
                if (key<3){
                    slide.push(changes.data.currentValue[key])
                }
                if (key==3){
                    this.list.set(1, [...slide])
                    slide.length = 0
                    slide.push(changes.data.currentValue[key])
                }
                if (key>3){
                    slide.push(changes.data.currentValue[key])
                }
                if (key==Object.keys(changes.data.currentValue).length-1){
                    this.list.set(2, slide)
                }
            })
            this.loading = false
        }
    }

}
