import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Users} from "../../../../models/Users";
import {ProfileService} from "./components/ProfileService";
import Swal from "sweetalert2";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    public loading: boolean = true;
    public environment: any = environment
    public user!: Users

    constructor(
        private http: HttpClient,
        private profileService: ProfileService,
    ) {
    }

    ngOnInit(): void {
        this.http.get(environment.restUrl+"/api/v1/user/profile")
            .subscribe((result:any) => {
                this.user = result
                this.user.username = result.name
                this.user.birthDate = result.birth
                this.user.lastVisit = result.last_visit
                this.user.about = result.about
                this.user.dateCreate = result.date_create
                this.loading = false
                this.profileService.user.next(result)
                this.profileService.result.subscribe(result => {
                    if (result == "success"){
                        Swal.fire('Редактрирование профиля',
                            'Профиль изменен',
                            'success')
                    }else{
                        Swal.fire('Редактрирование профиля',
                            'Вохникла ошибка при редактировании профиля',
                            'error')
                    }
                })
            })
    }

}
