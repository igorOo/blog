import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {TopPost} from "../../interfaces/TopPost";

@Component({
    selector: 'app-gadgets',
    templateUrl: './gadgets.component.html',
    styleUrls: ['./gadgets.component.scss']
})
export class GadgetsComponent implements OnInit {
    public loading: boolean = true
    public slideConfig = {
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "autoplay": false,
        "prevArrow": '',
        "nextArrow": ''
    };
    @Input() list: Array<TopPost> = []

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void{
        if (changes.list.currentValue){
            this.list = changes.list.currentValue
            this.loading = false
        }
    }


}
