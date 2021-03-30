import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TopPost} from "../../../index/interfaces/TopPost";

@Component({
    selector: 'app-top-readers',
    templateUrl: './top-readers.component.html',
    styleUrls: ['./top-readers.component.scss']
})
export class TopReadersComponent implements OnInit, OnChanges {

    @Input() posts: any | undefined
    public list : Array<TopPost> | undefined
    public loading: boolean = true
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

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.posts.currentValue){
            this.list = changes.posts.currentValue
            this.loading = false
        }
    }

}
