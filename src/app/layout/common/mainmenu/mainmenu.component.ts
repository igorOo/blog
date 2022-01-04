import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import MenuInterface from "../interfaces/MenuInterface";
import {AuthService} from "../../../services/auth-service.service";
import {environment} from "../../../../environments/environment";
import {MainmenuService} from "../../../services/mainmenu.service";

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

    public menu: Array<MenuInterface> = new Array<MenuInterface>();

    constructor(private http: HttpClient, public authService: AuthService, private menuService: MainmenuService) {}

    ngOnInit(): void {
        let mainMenu: Map<String, any> = new Map<String, any>()
        let menu: any = localStorage.getItem("mainMenu")
        if (menu !== null){
            mainMenu = JSON.parse(menu)
            // @ts-ignore
            if (mainMenu.expire >= Date.now()){
                // @ts-ignore
                this.menu = mainMenu.menu
            }else{
                this.getMenu(mainMenu)
            }
        }else{
            this.getMenu(mainMenu)
        }
        this.menuService.setMenu(this.menu.filter(item => item.name == "Новости"))
    }

    public logout(event: Event): void{
        event.preventDefault()
        event.stopImmediatePropagation()
        window.location.reload()
        this.authService.logout()
    }

    private getMenu(mainMenu: any){
        this.http.get<Array<MenuInterface>>(environment.restUrl+"/api/v1/mainmenu")
            .subscribe(result => {
                this.menu = result
                let date = new Date();
                let cache = JSON.stringify({menu: result, expire: date.setDate(date.getDate() + 1)})
                localStorage.setItem("mainMenu", cache)
            })
    }
}
