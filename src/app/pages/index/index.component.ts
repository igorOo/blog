import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import TopCategoriesInterface from "./interfaces/TopCategoriesInterface";
import {TopCategoriesListInterface} from "./interfaces/TopCategoriesListInterface";
import { Observable } from 'rxjs';
import {TopPost} from "./interfaces/TopPost";


@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    public tops: any = null;
    public gadgets: Array<TopPost> = []
    public interandprogs: Array<TopPost> = []
    public categList: TopCategoriesListInterface[] =[]
    public hardware: Array<TopPost> = []
    public articles: Array<TopPost> = []
    public articlesPagionation: object = {}
    public games: any
    public worldcar: any

    public currentPage: number = 1

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get("http://techno.loc/api/v1/posts/mainpage?page="+this.currentPage)
            .subscribe((result: any) => {
                if (result["tops"] != undefined) {
                    this.tops = result['tops'];
                }
                if(result["gadgets"] != undefined){
                    this.gadgets = result["gadgets"]
                }
                if (result["interandprogs"] != undefined){
                    this.interandprogs = result["interandprogs"]
                }
                if (result["hardware"] != undefined){
                    this.hardware = result["hardware"]
                }
                if (result["articles"] != undefined){
                    this.articles = result["articles"]["data"]
                    this.articlesPagionation = result["articles"]["pagination"]
                }
                if (result["games"] != undefined){
                    this.games = result["games"]
                }
                if (result["worldcar"] != undefined){
                    this.worldcar = result["worldcar"]
                }
            })

    }

    loadMoreArticles($event: number) {
        this.http.get("http://techno.loc/api/v1/posts/loadmorearticles")
            .subscribe((result: any) =>{
                if (result["articles"] != undefined){
                    result["articles"].forEach((item:TopPost) => {
                        this.articles.push(item);
                    })
                    this.currentPage = 2
                }
            })
    }
}
