import {Component, OnInit} from '@angular/core';
import {MainmenuService} from "../../../services/mainmenu.service";

@Component({
    selector: 'app-footer-menu',
    templateUrl: './footer-menu.component.html',
    styleUrls: ['./footer-menu.component.scss']
})
export class FooterMenuComponent implements OnInit {
    public list: Array<any> = new Array<any>()

    constructor(private menuService: MainmenuService) {
    }

    ngOnInit(): void {
        this.menuService.menu.subscribe(result => {
            if (result[0] !== undefined && result[0].children !== undefined){
                this.list = result[0].children
            }
        })
    }

}
