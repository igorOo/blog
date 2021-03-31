import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TopPost} from "../../../index/interfaces/TopPost";

@Component({
    selector: 'app-top-readers',
    templateUrl: './top-readers.component.html',
    styleUrls: ['./top-readers.component.scss']
})
export class TopReadersComponent implements OnInit, OnChanges {

    @Input() posts: any | undefined
    public list : Map<Number, Array<TopPost>> = new Map<number, Array<TopPost>>()
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
            let slide: Array<TopPost> = new Array<TopPost>()
            Object.keys(changes.posts.currentValue).map((key:any) => {
                if (key<3){
                    slide.push(changes.posts.currentValue[key])
                }
                if (key==3){
                    this.list.set(1, [...slide])
                    slide.length = 0
                    slide.push(changes.posts.currentValue[key])
                }
                if (key>3){
                    slide.push(changes.posts.currentValue[key])
                }
                if (key==Object.keys(changes.posts.currentValue).length-1){
                    this.list.set(2, slide)
                }
            })
            this.loading = false
        }
    }

}
