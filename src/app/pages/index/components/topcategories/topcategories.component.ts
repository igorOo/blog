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
    public randomList: any[] = [];
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
    public list: any[] = [];
    public categories: TopCategoriesListInterface[] = [];

    @Input() tops: any

    constructor() {
    }

    ngOnInit(): void {
        this.tops.subscribe((result: any) => {
            if (result["tops"] != undefined) {
                for (const key in result["tops"]) {
                    let item = result['tops'][key];
                    this.list.push(item);
                    let cat: TopCategoriesListInterface = {
                        category: result['tops'][key][0].category,
                        category_id: result['tops'][key][0].category_id,
                        cat_translit: result['tops'][key][0].cat_translit,
                    };
                    this.categories.push(cat)
                }
                this.generateRandomList()
                this.loading = false
                console.log(this.list)
                console.log(this.categories)
            }
        })
    }

    ngOnChanges(changes: SimpleChanges): void{

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
    }

    generateRandomList(){
        for (let i = 0; i < 5; i++) {
            let parentKeys = Object.keys(this.list);
            let parentRand = parentKeys[Math.floor(Math.random() * Math.floor(3))];
            let childRand: number = Math.floor(Math.random() * Math.floor(4));

            if (i == 0){
                // @ts-ignore
                this.firstPost = this.list[parentRand][childRand]
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
    }
}
