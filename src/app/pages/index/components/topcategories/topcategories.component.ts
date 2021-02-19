import {Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck} from '@angular/core';
import {TopCategoriesListInterface} from "../../interfaces/TopCategoriesListInterface";

@Component({
    selector: 'app-topcategories',
    templateUrl: './topcategories.component.html',
    styleUrls: ['./topcategories.component.scss']
})
export class TopcategoriesComponent implements OnInit, OnChanges, DoCheck {
    public randomList: any[] = [];
    public firstPost = null;
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
                for (let i = 0; i < 5; i++) {
                    let parentKeys = Object.keys(result["tops"]);
                    let parentRand = parentKeys[Math.floor(Math.random() * Math.floor(3))];
                    let childRand: number = Math.floor(Math.random() * Math.floor(4));

                    if (i == 0){
                        this.firstPost = result["tops"][parentRand][childRand]
                        continue
                    }
                    let inner = false
                    this.randomList.forEach(item => {
                        if (item.translit == result["tops"][parentRand][childRand].translit) {
                            inner=true
                        } 
                    })
                    if (!inner) {
                        this.randomList.push(result["tops"][parentRand][childRand])
                    } else {
                        inner = false
                        i--
                    }
                }
                console.log(this.randomList)
            }
        })
    }

    ngOnChanges(changes: SimpleChanges): void{
      
    }

    ngDoCheck() {
       
    }
}
