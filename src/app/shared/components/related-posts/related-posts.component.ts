import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {News} from "../../../models/News";
import {environment} from "../../../../environments/environment";

@Component({
    selector: 'app-related-posts',
    templateUrl: './related-posts.component.html',
    styleUrls: ['./related-posts.component.scss']
})
export class RelatedPostsComponent implements OnInit, OnChanges {

    @Input() posts: any | undefined
    public list: any | undefined
    public loading: boolean = true

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.posts.currentValue){
            this.list = changes.posts.currentValue
            this.loading = false
        }
    }

}
