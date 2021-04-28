import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-paginaton',
    templateUrl: './paginaton.component.html',
    styleUrls: ['./paginaton.component.scss']
})
export class PaginatonComponent implements OnInit, OnChanges {

    @Input() currentPage: number = 1
    @Input() lastPage: number = 1
    public arrayPages: Array<number> = new Array<number>();

    @Output() changePage = new EventEmitter<number>()

    constructor() {
    }

    ngOnInit(): void {
        this.arrayPages = Array(this.lastPage).fill(null).map((x,i)=>i+1);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.lastPage !== undefined){
            if (changes.lastPage.currentValue){
                this.arrayPages = Array(this.lastPage).fill(null).map((x,i)=>i+1);
            }
        }
    }

    clickPage(page: number, event: Event){
        event.stopImmediatePropagation()
        event.preventDefault()
        this.currentPage = page
        this.changePage.emit(page)
    }
}
