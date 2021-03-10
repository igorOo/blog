import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-worldandauto',
    templateUrl: './worldandauto.component.html',
    styleUrls: ['./worldandauto.component.scss']
})
export class WorldandautoComponent implements OnInit {

    @Input() data: any

    constructor() {
    }

    ngOnInit(): void {
    }

}
