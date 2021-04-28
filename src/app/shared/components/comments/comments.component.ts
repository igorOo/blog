import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Comment, Comments} from "../../../models/Comments";
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
    public lastPage: number = 1
    public replyCommentId: number = 0
    public replyUserName: string | undefined
    private user: Users | null = null
    public error: string = ""

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
            this.loadData()
        }
    }

    loadData():void{
        this.http.get(environment.restUrl+"/api/v1/comments/"+this.postId+"/"+this.page)
            .subscribe((result:any) => {
                if (result.comments != undefined){
                    this.comments = result.comments
                    this.count_comments = result.count_comments

                    if(result.pages !== undefined){
                        this.lastPage = result.pages.lastPage
                        this.page = result.pages.currentPage
                    }
                }
            })
    }

    submitForm(event: Event): void {
        event.preventDefault()
        event.stopImmediatePropagation()
        if (this.form.get("comment")?.value.trim() == ""){
            this.error = "Комментарий не может быть пустым"
            return;
        }
        let formData: any = new FormData()
        formData.append("comment    ", this.form.get("comment")?.value)
        formData.append("email", this.user?.email)
        if (this.replyCommentId > 0){
            formData.append("reply", this.replyCommentId)
        }
        this.http.post(environment.restUrl+"/api/v1/comments/"+this.postId+"/addcomment", formData)
            .subscribe((result:any) => {
                if (result.result !== undefined){
                    result = result.result
                }
                let inserted: boolean = false
                this.comments?.map(item => {
                    if (item.id == result.id){
                        item = result
                        inserted = true
                    }
                })
                if (!inserted){
                    let comment: Comment = {
                        id: result.id,
                        author: result.author,
                        avatar: result.avatar,
                        text: result.text,
                        created_at: new Date(),
                        updated_at: new Date(),
                        // @ts-ignore
                        author_id: result.author_id
                    }
                    this.comments?.push(comment)
                    inserted = false
                }
                this.form.reset()
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

    editComment(id: number, event: Event) {
        event.preventDefault()
        event.stopImmediatePropagation()
        this.comments?.map((comment:Comments) => {
            if (comment.id == id){
                this.form.get("comment")?.setValue(comment.text)
                this.commentForm.nativeElement.scrollIntoView({ behavior: 'smooth' })
            }
        })
    }

    changePage($event: number) {
        this.page = $event
        this.loadData()
    }
}
