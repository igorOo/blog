import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {News} from "../../models/News";
import {environment} from "../../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {TopPost} from "../index/interfaces/TopPost";

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
    public post: News | undefined | any
    public loading: boolean = true
    public document: any = Document
    public time: number = Date.now()
    public similarPosts: Array<TopPost> | undefined
    public topReaderPosts: Array<TopPost> | undefined
    public randomImagePosts: Array<TopPost> | undefined

    constructor(
        private http: HttpClient,
        private router: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        let obs = new Observable(sub => {
            this.http.get(environment.restUrl + "/api/v1/new/" + this.router.snapshot.params["translit"],
                {
                    headers: {'Content-Type': 'application/json'}
                })
                .subscribe(response => {
                    this.post = response
                    sub.next({category: this.post.category.translit, post: this.post.id})
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
                                    post_id: self.post.id,
                                    timeRead: Math.ceil((Date.now() - self.time) / 1000)
                                }).subscribe(result => {

                                })
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
            this.http.get(environment.restUrl+"/api/v1/new/get-other-posts/"+data.category+"/"+data.post)
                .subscribe((result:any) => {
                    if (result["similar-posts"] != undefined) {
                        this.similarPosts = result["similar-posts"]
                    }
                    if (result["top-reader-posts"] != undefined){
                        this.topReaderPosts = result["top-reader-posts"]
                    }
                    if (result["random-image-posts"] != undefined){
                        this.randomImagePosts = result["random-image-posts"]
                    }
                })
        })
    }

}


