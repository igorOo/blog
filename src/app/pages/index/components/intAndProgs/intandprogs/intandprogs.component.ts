import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {TopPost} from "../../../interfaces/TopPost";
import {TopCategoriesListInterface} from "../../../interfaces/TopCategoriesListInterface";
import filterForPipe from "../../../../../pipes/filterFor.pipe"

@Component({
    selector: 'app-intandprogs',
    templateUrl: './intandprogs.component.html',
    styleUrls: ['./intandprogs.component.scss']
})
export class IntandprogsComponent implements OnInit {
    @Input() list: any[] = []
    private loading: boolean = true
    public categories: Array<TopCategoriesListInterface> = []
    public activeList: Array<TopPost> = []
    public currentTab: number = 1;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void{
        if (Object.keys(changes.list.currentValue).length){
            for (const key in changes.list.currentValue) {
                changes.list.currentValue[key].map((item: TopPost, index:number) => {
                    if (index<3){
                        this.activeList.push(item)
                    }
                })
                // let item = changes.list.currentValue[key];
                // this.list.push(item)
                let cat: TopCategoriesListInterface = {
                    category: changes.list.currentValue[key][0].category,
                    category_id: changes.list.currentValue[key][0].category_id,
                    cat_translit: changes.list.currentValue[key][0].cat_translit,
                };
                this.categories.push(cat)
            }
            this.loading = false
        }
    }

    changeTab($event: MouseEvent, category_id: number) {
        $event.preventDefault()
        this.activeList = []
        this.list[category_id].map((item:TopPost) => this.activeList.push(item))
        this.currentTab = category_id
    }

    changeAllTab($event: MouseEvent) {
        $event.preventDefault()
        this.activeList = []
        for (let key in this.list){
            for( let i =0; i<3; i++){
                this.activeList.push(this.list[key][i])
            }
        }
        this.currentTab = 1
    }
}
