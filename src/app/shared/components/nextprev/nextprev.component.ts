import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-nextprev',
    templateUrl: './nextprev.component.html',
    styleUrls: ['./nextprev.component.scss']
})
export class NextprevComponent implements OnInit, OnChanges {
    @Input() list!: Array<any>

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

}
