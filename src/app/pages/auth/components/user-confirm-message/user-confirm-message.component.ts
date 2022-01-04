import {Component, OnInit} from '@angular/core';
import {Breadcrumb} from "../../../../models/Breadcrumb";

@Component({
    selector: 'app-user-confirm-message',
    templateUrl: './user-confirm-message.component.html',
    styleUrls: ['./user-confirm-message.component.scss']
})
export class UserConfirmMessageComponent implements OnInit {
    public breadcrumbList: Array<Breadcrumb> = new Array<Breadcrumb>()

    constructor() {
        this.breadcrumbList.push({name: "Регистрация", url: null})
    }

    ngOnInit(): void {
    }

}
