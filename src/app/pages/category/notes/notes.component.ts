import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {News} from "../../../models/News";
import {TopPost} from "../../index/interfaces/TopPost";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

    public list!: Array<News>
    public categoryName: string = ''
    public loading: boolean = true
    public page: number = 1
    public lastPage: number = 1
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
            this.http.get(environment.restUrl + "/api/v1/notes/category/" + this.router.snapshot.params["translit"] + "?page=" + this.page,
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
                    }
                })
        })
        obs.subscribe((result:any) => {
            if (result.status == "update"){
                this.lineposts.nativeElement.scrollIntoView({behavior: 'smooth'})
                // document.body.scrollTop = 0
                // document.documentElement.scrollTop = 0
            }
        })
        this.loading = false
    }

    titlePage(){
        return this.page > 1 ? ' страница '+ this.page : ''
    }
}
