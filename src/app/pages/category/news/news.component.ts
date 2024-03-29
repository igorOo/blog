import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {News} from "../../../models/News";
import {environment} from "../../../../environments/environment";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Observable} from "rxjs";
import {TopPost} from "../../index/interfaces/TopPost";

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

    public list!: Array<News>
    public categoryName: string = ''
    public loading: boolean = true
    public page: number = 1
    public lastPage: number = 1
    public topReaderPosts: Array<TopPost> | undefined
    public randomImagePosts: Array<TopPost> | undefined
    // @ts-ignore
    @ViewChild("lineposts") lineposts: ElementRef

    constructor(
        private  http: HttpClient,
        private router: ActivatedRoute,
        private thisRouter: Router
    ) {
    }

    ngOnInit(): void {
        let page: number = 1
        this.router.queryParams.subscribe(paramMap => page = paramMap['page'])
        if (page !== undefined){
            this.page = page
        }
        this.loadData(false)
    }


    changePage($event: number) {
        this.page = $event

        //смена параметра pgae в строке адреса браузера
        const queryParams: Params = { page: this.page };
        this.thisRouter.navigate(
            [],
            {
                relativeTo: this.router,
                queryParams: queryParams,
                queryParamsHandling: 'merge'
            }
        )
        this.loadData(true)

    }

    private loadData(update: boolean) {
        this.loading = true
        let obs = new Observable(sub => {
            this.http.get(environment.restUrl + "/api/v1/news/category/" + this.router.snapshot.params["translit"] + "?page=" + this.page,
                {
                    headers: {'Content-Type': 'application/json'}
                })
                .subscribe((result: any) => {
                    if (result["posts"] !== undefined) {
                        this.list = result["posts"]
                        this.categoryName = result["posts"][0].category
                    }

                    if (result.pages !== undefined) {
                        this.lastPage = result.pages.lastPage
                        this.page = result.pages.currentPage
                    }
                    this.loading = false

                    if (update){
                        sub.next({status:"update"})
                        sub.complete()
                    }else{
                        sub.next({status:"open"})
                        sub.complete()
                    }
                })
        })
        obs.subscribe((result:any) => {
            if (result.status == "update"){
                this.lineposts.nativeElement.scrollIntoView({behavior: 'smooth'})
                // document.body.scrollTop = 0
                // document.documentElement.scrollTop = 0
            }
            if (result.status == "open"){
                this.http.get(environment.restUrl+"/api/v1/new/get-other-posts/"+this.router.snapshot.params["translit"])
                    .subscribe((result:any) => {
                        if (result["top-reader-posts"] != undefined){
                            this.topReaderPosts = result["top-reader-posts"]
                        }
                        if (result["random-image-posts"] != undefined){
                            this.randomImagePosts = result["random-image-posts"]
                        }
                    })
            }
        })
        this.loading = false
    }

    titlePage(){
        return this.page > 1 ? ' страница '+ this.page : ''
    }
}
