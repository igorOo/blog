import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Note} from "../../models/Note";
import {TopPost} from "../index/interfaces/TopPost";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
    public note!: Note
    public loading: boolean = true
    public document: any = Document
    public time: number = Date.now()
    public similarPosts: Array<TopPost> | undefined
    public nextPrevPosts: Array<any> | undefined
    public countComment: number = 0

    constructor(
        private http: HttpClient,
        private router: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        let obs = new Observable(sub => {
            this.http.get(environment.restUrl + "/api/v1/note/" + this.router.snapshot.params["translit"],
                {
                    headers: {'Content-Type': 'application/json'}
                })
                .subscribe((response:any) => {
                    this.note = response
                    sub.next({category: this.note.category.translit, post: this.note.id})
                    sub.complete()
                    this.loading = false

                    let script = document.createElement('script');
                    script.src = "https://yastatic.net/share2/share.js";
                    document.body.append(script);

                    let self = this
                    setTimeout(function () {
                        let links = document.querySelectorAll("a")
                        for (let i = 0; i < links.length; i++) {
                            links[i].addEventListener("click", function (e) {
                                e.preventDefault()
                                e.stopPropagation()
                                self.http.post(environment.restUrl+"/api/v1/metrika/add-time-read-post", {
                                    post_id: self.note.id,
                                    timeRead: Math.ceil((Date.now() - self.time) / 1000)
                                }).subscribe()
                                // @ts-ignore
                                let url = e.currentTarget.href
                                setTimeout(function (){
                                    window.location.href = url;
                                },500)

                            })
                        }
                    }, 1000)
                })
        })

        //запрос на менее важный контент после получения данных статьи. (похожие статьи, топ читаемых, коммментарии и т.д.)
        obs.subscribe((data:any) => {
            this.http.get(environment.restUrl+"/api/v1/note/get-other-posts/"+data.category+"/"+data.post)
                .subscribe((result:any) => {
                    if (result["similar-posts"] != undefined) {
                        this.similarPosts = result["similar-posts"]
                    }
                    if (result["next-prev"] != undefined){
                        this.nextPrevPosts = result["next-prev"]
                    }
                })
        })
    }

    changeCountComment(countComment: number) {
        this.countComment = countComment
    }
}
