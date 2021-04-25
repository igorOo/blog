import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Comments} from "../../../models/Comments";
import {AuthService} from "../../../services/auth-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Users} from "../../../models/Users";
import {Router} from "@angular/router";

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
    public replyUserName: string | undefined
    private user: Users | null = null

    public form: FormGroup = new FormGroup({
        comment: new FormControl('', [Validators.required]),
    })
    // @ts-ignore
    @ViewChild('commentForm') commentForm: ElementRef


    constructor(private http: HttpClient, public authService: AuthService, private router: Router) {
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

                        console.log(this.user)
                        console.log(this.comments)
                    }
                })
        }
    }

    submitForm(event: Event): void {
        event.preventDefault()
        event.stopImmediatePropagation()
        let formData: any = new FormData()
        formData.append("comment    ", this.form.get("comment")?.value)
        formData.append("email", this.user?.email)
        if (this.replyCommentId > 0){
            formData.append("reply", this.replyCommentId)
        }
        this.http.post(environment.restUrl+"/api/v1/comments/"+this.postId+"/addcomment", formData)
            .subscribe((result:any) => {
                if (result.id !== undefined){
                    let username = this.user? this.user.username: "Анноним"
                    let comment: Comments = {
                        id: result.id,
                        author: (this.user?.firstName || this.user?.lastName) ?  this.user.firstName+" "+this.user?.lastName : username,
                        avatar: this.user?.avatar? this.user.avatar : "",
                        text: this.form.get("comment")?.value,
                        created_at: new Date(),
                        updated_at: new Date()
                    }
                    this.comments?.push(comment)
                }
            },
                error => {
                    if (error.status == 401 || error.status == 403){
                        this.router.navigate(["/login"])
                    }
            })
    }

    replyComment(comment_id: number, username: string,  event: Event):void {
        event.preventDefault()
        event.stopImmediatePropagation()
        this.replyCommentId = comment_id
        this.replyUserName = username
        this.commentForm.nativeElement.scrollIntoView({ behavior: 'smooth' })
    }

    cancelReply(event: Event) {
        event.preventDefault()
        event.stopImmediatePropagation()
        this.replyCommentId = 0
        this.replyUserName = undefined
    }

    clearForm(){
        this.form.reset();
        this.replyCommentId = 0
        this.replyUserName = undefined
    }

    isAuthor(user_id: bigint){
        return this.user?.id === user_id
    }
}
