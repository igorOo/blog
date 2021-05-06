import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {News} from "../../../models/News";
import {environment} from "../../../../environments/environment";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

    public list!: Array<News>
    public loading: boolean = true
    public page: number = 1

    constructor(private  http: HttpClient, private router: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.http.get(environment.restUrl + "/api/v1/news/category/" + this.router.snapshot.params["translit"]+"?page="+this.page,
            {
                headers: {'Content-Type': 'application/json'}
            })
            .subscribe((result:any) => {
                if (result["posts"] !== undefined){
                    this.list = result["posts"]
                    console.log(this.list)
                }

                this.loading = false
            })
    }

}
