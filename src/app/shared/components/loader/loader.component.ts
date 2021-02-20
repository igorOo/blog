import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
    @Input() image: boolean = false
    @Input() heightImage: number = 0
    @Input() widthImage: number = 0
    @Input() lines: number = 0
    @Input() inline: boolean = false

    public linesArray: Array<number> = [1]

    constructor() {
    }

    ngOnInit(): void {
    }

    getRandomInRange(): number {
        return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    }

    ngOnChanges(changes: SimpleChanges): void{
        // @ts-ignore
        this.linesArray = Array(this.lines).fill().map((x,i)=>i);
    }
}
