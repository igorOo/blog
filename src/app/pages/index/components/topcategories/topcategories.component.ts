import { TopPost } from './../../interfaces/TopPost';
import {Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck} from '@angular/core';
import {TopCategoriesListInterface} from "../../interfaces/TopCategoriesListInterface";

@Component({
    selector: 'app-topcategories',
    templateUrl: './topcategories.component.html',
    styleUrls: ['./topcategories.component.scss']
})
export class TopcategoriesComponent implements OnInit, OnChanges, DoCheck {
    public loading:boolean = true;
    public currentTab: number = 1;
    public randomList: any[] = [];
    public initedRandomList: Array<TopPost> = []
    public firstPost:TopPost = {
        id:0,
        name: '',
        translit: '',
        main_image: '',
        date_create: '',
        type: 0,
        category: '',
        cat_translit: '',
        first_name: '',
        last_name: '',
        category_id: 0,
        url: '',
        author: '',
    };
    public initedFirstPost: TopPost = this.firstPost
    public list: any[] = [];
    public categories: TopCategoriesListInterface[] = [];

    @Input() tops: any

    constructor() {
    }

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void{
        if (changes.tops.currentValue){
            for (const key in changes.tops.currentValue) {
                let item = changes.tops.currentValue[key];
                this.list.push(item);
                let cat: TopCategoriesListInterface = {
                    category: changes.tops.currentValue[key][0].category,
                    category_id: changes.tops.currentValue[key][0].category_id,
                    cat_translit: changes.tops.currentValue[key][0].cat_translit,
                };
                this.categories.push(cat)
            }
            this.generateRandomList()
            this.loading = false
        }

    }

    ngDoCheck() {

    }

    changeTab(e: Event, category: number) {
        e.preventDefault()
        this.randomList = []
        this.list.map((item, key) => {
            if (item[0].category_id == category){
                this.firstPost = item[0]
                this.randomList.push(item[1])
                this.randomList.push(item[2])
                this.randomList.push(item[3])
                this.randomList.push(item[4])
            }
        })
        this.currentTab = category
    }

    generateRandomList(){
        for (let i = 0; i < 5; i++) {
            let parentKeys = Object.keys(this.list);
            let parentRand = parentKeys[Math.floor(Math.random() * Math.floor(3))];
            let childRand: number = Math.floor(Math.random() * Math.floor(4));

            if (i == 0){
                // @ts-ignore
                this.firstPost = this.list[parentRand][childRand]
                this.initedFirstPost = this.firstPost
                continue
            }
            let inner = false
            this.randomList.forEach(item => {
                // @ts-ignore
                if (item.translit == this.list[parentRand][childRand].translit) {
                    inner=true
                }
            })
            if (!inner) {
                // @ts-ignore
                this.randomList.push(this.list[parentRand][childRand])
            } else {
                inner = false
                i--
            }
        }
        this.initedRandomList = this.randomList
    }

    changeAllTab(e: Event){
        e.preventDefault()
        this.randomList = this.initedRandomList
        this.firstPost = this.initedFirstPost
        this.currentTab = 1
    }
}
