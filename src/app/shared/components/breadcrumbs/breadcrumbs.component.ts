import {Component, Input, OnInit} from '@angular/core';
import {Breadcrumb} from "../../../models/Breadcrumb";

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

    @Input() title: string | undefined
    @Input() list: Array<Breadcrumb> | undefined

    constructor() {
    }

    ngOnInit(): void {
    }


}


