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
    public list: Array<TopPost> = new Array<TopPost>()
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
                this.list.push(changes.data.currentValue[key])
            })
            this.loading = false
            console.log(this.list)
        }
    }

}
