import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {TopPost} from "../../interfaces/TopPost";

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
    @Input() inputData: Array<TopPost> = []

    public list: Array<TopPost> = []
    public loading: boolean = true

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void{
        if (changes.inputData.currentValue){
            this.list = changes.inputData.currentValue
            this.loading = false
        }
    }

    loadMore(): void {
        alert("Хуй тебе, а не лоад море")
    }
}
