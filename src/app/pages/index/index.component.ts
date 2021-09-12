import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TopCategoriesListInterface} from "./interfaces/TopCategoriesListInterface";
import {TopPost} from "./interfaces/TopPost";
import {environment} from 'src/environments/environment';


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
    public another: any
    public slider: Map<String, Array<TopPost>> = new Map<String, Array<TopPost>>()

    public currentPage: number = 1

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get(environment.restUrl+"/api/v1/mainpage?page="+this.currentPage)
            .subscribe((result: any) => {
                if (result["tops"] != undefined) {
                    this.tops = result['tops'];
                }
                if(result["gadgets"] != undefined){
                    this.gadgets = result["gadgets"]
                    this.addSliderItem(1, this.gadgets)
                    this.addSliderItem(2, this.gadgets)
                }
                if (result["interandprogs"] != undefined){
                    this.interandprogs = result["interandprogs"]
                    this.addSliderItem(1, this.interandprogs[10])
                    this.addSliderItem(2, this.interandprogs[10])
                }
                if (result["hardware"] != undefined){
                    this.hardware = result["hardware"]
                    this.addSliderItem(1, this.hardware)
                    this.addSliderItem(2, this.hardware)
                }
                if (result["articles"] != undefined){
                    this.articles = result["articles"]["data"]
                    this.articlesPagionation = result["articles"]["pagination"]
                }
                if (result["games"] != undefined){
                    this.games = result["games"]
                    this.addSliderItem(1, this.games[1])
                    this.addSliderItem(2, this.games[1])
                }
                if (result["worldcar"] != undefined){
                    this.worldcar = result["worldcar"]
                }
                if (result["another"] != undefined){
                    this.another = result["another"]
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

    private addSliderItem(slider: number, category: any):void{
        let sliderItem: Array<TopPost> | undefined = this.slider.get("slider" + slider)
        if (sliderItem !== undefined){
            sliderItem.push(category[slider-1])
            this.slider.set("slider" + slider, sliderItem)
        }else{
            let arr: Array<TopPost> = new Array<TopPost>()
            arr.push(category[slider-1])
            this.slider.set("slider" + slider, arr)
        }
    }
}
