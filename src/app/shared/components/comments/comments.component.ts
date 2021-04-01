import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

    @Input() postId: number | undefined

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        if (this.postId != undefined){
            this.httpClient.get(environment.restUrl+"/api/v1/comments/"+this.postId)
                .subscribe(result => {
                    console.log(result)
                })
        }
    }

}
