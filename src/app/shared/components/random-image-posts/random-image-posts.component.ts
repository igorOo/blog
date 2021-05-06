import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TopPost} from "../../../pages/index/interfaces/TopPost";

@Component({
    selector: 'app-random-image-posts',
    templateUrl: './random-image-posts.component.html',
    styleUrls: ['./random-image-posts.component.scss']
})
export class RandomImagePostsComponent implements OnInit, OnChanges {

    @Input() posts: any
    public list: Array<TopPost> = new Array<TopPost>()
    public loading: boolean = true

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
