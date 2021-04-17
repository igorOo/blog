import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Comments} from "../../../models/Comments";
import {AuthService} from "../../../services/auth-service.service";

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

    @Input() postId: number | undefined
    public comments: Array<Comments> | undefined
    public count_comments: number | undefined
    public page: number = 1
    public replyCommentId: number = 0

    constructor(private httpClient: HttpClient, public authService: AuthService) {
    }

    ngOnInit(): void {
        if (this.postId != undefined){
            this.httpClient.get(environment.restUrl+"/api/v1/comments/"+this.postId+"/"+this.page)
                .subscribe((result:any) => {
                    if (result.comments != undefined){
                        this.comments = result.comments
                        this.count_comments = result.count_comments
                    }
                })
        }
    }

}
