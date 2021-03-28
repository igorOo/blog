import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {News} from "../../../../models/News";
import {environment} from "../../../../../environments/environment";

@Component({
    selector: 'app-related-posts',
    templateUrl: './related-posts.component.html',
    styleUrls: ['./related-posts.component.scss']
})
export class RelatedPostsComponent implements OnInit {

    @Input() category: number | string = ''
    public list: any | undefined
    public loading: boolean = true

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get(environment.restUrl+"/api/v1/new/similar-posts/"+this.category)
            .subscribe(result => {
                console.log(result)
                this.list = result
                this.loading = false
            })
    }

}
