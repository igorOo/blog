import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import MenuInterface from "../interfaces/MenuInterface";
import {AuthService} from "../../../services/auth-service.service";

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

    public menu: MenuInterface[] = [];

    constructor(private http: HttpClient, public authService: AuthService) {}

    ngOnInit(): void {
        let menu: any = null
        if ((menu = localStorage.getItem("mainMenu")) != null){
            this.menu = <MenuInterface[]>JSON.parse(menu)
        }else{
            this.http.get<MenuInterface[]>("http://techno.loc/api/v1/categories")
                .subscribe(result => {
                    this.menu = result
                    localStorage.setItem("mainMenu", JSON.stringify(result))
                })
        }
    }

}
