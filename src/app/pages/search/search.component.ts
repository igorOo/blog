import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TopPost} from "../index/interfaces/TopPost";
import {News} from "../../models/News";
import {Observable} from "rxjs";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    public list!: Array<News>
    public searchString: string
    public loading: boolean = true
    public page: number = 1
    public lastPage: number = 1
    public topReaderPosts: Array<TopPost> | undefined
    public randomImagePosts: Array<TopPost> | undefined
    // @ts-ignore
    @ViewChild("lineposts") lineposts: ElementRef
    public errorMsg: string = ""

    constructor(private http: HttpClient, private route: ActivatedRoute, private thisRouter: Router) {
        this.searchString = route.snapshot.queryParams["s"]
    }

    ngOnInit(): void {
        let page: number = 1
        this.route.queryParams.subscribe(paramMap => page = paramMap['page'])
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
                relativeTo: this.route,
                queryParams: queryParams,
                queryParamsHandling: 'merge'
            }
        )
        this.loadData(true)

    }

    loadData(update: boolean){
        this.loading = true
        let obs = new Observable(sub => {
            this.http.get(environment.restUrl+"/api/v1/search?s="+this.searchString+ "&page=" + this.page)
                .subscribe((result:any) => {
                    console.log(result)
                    if (result["posts"] != undefined) {
                        this.list = result["posts"]
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
                }, error => {
                    console.log(error)
                    this.errorMsg = error.error
                })
        })
        obs.subscribe((result:any) => {
            if (result.status == "update"){
                this.lineposts.nativeElement.scrollIntoView({behavior: 'smooth'})
                // document.body.scrollTop = 0
                // document.documentElement.scrollTop = 0
            }
            if (result.status == "open"){
                this.http.get(environment.restUrl+"/api/v1/new/get-other-posts/"+this.route.snapshot.params["translit"])
                    .subscribe((result:any) => {
                        if (result["random-image-posts"] != undefined){
                            this.randomImagePosts = result["random-image-posts"]
                        }
                    })
            }
        })
        this.loading = false
    }

}
