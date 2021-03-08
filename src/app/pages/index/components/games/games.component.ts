import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {TopPost} from "../../interfaces/TopPost";

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
    public loading: boolean = true
    public slideConfig = {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": false,
        "prevArrow": '',
        "nextArrow": ''
    };
    public sliders: any[] = []
    @Input() list: any

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void{
        if (changes.list.currentValue && Object.keys(changes.list.currentValue).length){
            Object.keys(changes.list.currentValue).map((item:any) => {
                this.sliders.push(changes.list.currentValue[item])
            })
            this.loading = false
        }
    }

}
