import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Comments} from "../../../models/Comments";
import {AuthService} from "../../../services/auth-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Users} from "../../../models/Users";

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
    private user: Users | null = null

    public form: FormGroup = new FormGroup({
        comment: new FormControl('', [Validators.required]),
    })

    constructor(private http: HttpClient, public authService: AuthService) {
        authService.currentUser.subscribe(user => {
            this.user = user
        })
    }

    ngOnInit(): void {
        if (this.postId != undefined){
            this.http.get(environment.restUrl+"/api/v1/comments/"+this.postId+"/"+this.page)
                .subscribe((result:any) => {
                    if (result.comments != undefined){
                        this.comments = result.comments
                        this.count_comments = result.count_comments
                    }
                })
        }
    }

    submitForm(event: Event): void {
        event.preventDefault()
        let formData: any = new FormData()
        formData.append("comment    ", this.form.get("comment")?.value)
        formData.append("post_id", this.postId)
        formData.append("email", this.user?.email)
        if (this.replyCommentId){
            formData.append("reply_id", this.replyCommentId)
        }
        this.http.post(environment.restUrl+"/api/v1/comments/"+this.postId+"/addcomment", formData)
            .subscribe(result => {
                console.log(result)
            })
    }

}
