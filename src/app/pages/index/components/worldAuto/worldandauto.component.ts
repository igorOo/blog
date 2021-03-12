import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {TopPost} from "../../interfaces/TopPost";
import {TopCategoriesListInterface} from "../../interfaces/TopCategoriesListInterface";

@Component({
    selector: 'app-worldandauto',
    templateUrl: './worldandauto.component.html',
    styleUrls: ['./worldandauto.component.scss']
})
export class WorldandautoComponent implements OnInit {

    @Input() data: any
    public loading: boolean = true
    public list: Map<number, Array<TopPost>> = new Map<number, Array<TopPost>>()
    public slideConfig = {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": false,
        "prevArrow": '',
        "nextArrow": ''
    };
    public currentTab: number = 7;
    public categories: Array<TopCategoriesListInterface> = []

    constructor() {
    }

    ngOnInit(): void {
    }

    //TODO:Сделать динамическую высоту, чтобы кнопки "плавали"
    ngOnChanges(changes: SimpleChanges):void {
        if (changes.data.currentValue && Object.keys(changes.data.currentValue).length){
            Object.keys(changes.data.currentValue).map((key:any) => {
                this.list.set(key, changes.data.currentValue[key])
                let cat: TopCategoriesListInterface = {
                    category: changes.data.currentValue[key][0].category,
                    category_id: changes.data.currentValue[key][0].category_id,
                    cat_translit: changes.data.currentValue[key][0].cat_translit,
                };
                this.categories.push(cat)
            })
            this.loading = false
        }
    }

    changeTab(event: Event, category_id: number): void {
        event.preventDefault()
        this.currentTab = category_id
    }
}
