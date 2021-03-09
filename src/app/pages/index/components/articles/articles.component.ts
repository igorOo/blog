import {Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {TopPost} from "../../interfaces/TopPost";
import {Pagination} from "./interfaces/Pagination";

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
    @Input() inputData: Array<TopPost> = []
    @Input() inputPagination: object = {}
    @Input() currentPage: number = 1

    @Output() onChanged = new EventEmitter<number>()

    public list: Array<TopPost> = []
    public pagination: Pagination = {
        totalRows : 0,
        totalPages: 1,
        currentPage : 1
    }
    public loading: boolean = true
    public loadmore: boolean = false

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void{
        if (changes.inputData != undefined && changes.inputData.currentValue){
            this.list = changes.inputData.currentValue
            this.pagination = changes.inputPagination.currentValue
            this.currentPage = this.pagination.currentPage
            this.loading = false
        }
        if (changes.currentPage != undefined && changes.currentPage.currentValue > 1){
            this.loadmore = false
        }
    }

    loadMore(): void {
        if (this.currentPage == 1){
            this.onChanged.emit(this.currentPage+1)
            this.loadmore = true
        }
    }
}
