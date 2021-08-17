import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import MenuInterface from "../interfaces/MenuInterface";
import {AuthService} from "../../../services/auth-service.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

    public menu: MenuInterface[] = [];

    constructor(private http: HttpClient, public authService: AuthService) {}

    ngOnInit(): void {
        let menu: any = localStorage.getItem("mainMenu")
        // if (menu != "null" && menu !== null){
        //     this.menu = <MenuInterface[]>JSON.parse(menu)
        //     console.log(this.menu)
        // }else{
            this.http.get<MenuInterface[]>(environment.restUrl+"/api/v1/mainmenu")
                .subscribe(result => {
                    this.menu = result
                    localStorage.setItem("mainMenu", JSON.stringify(result))
                })
        // }
    }

    public logout(event: Event): void{
        event.preventDefault()
        event.stopImmediatePropagation()
        window.location.reload()
        this.authService.logout()
    }
}
