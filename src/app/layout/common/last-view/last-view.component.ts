import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../services/auth-service.service";
import {environment} from "../../../../environments/environment";
import {HttpResponse} from "../../../storage/response/HttpResponse";
import {TopPost} from "../../../pages/index/interfaces/TopPost";

@Component({
    selector: 'app-last-view',
    templateUrl: './last-view.component.html',
    styleUrls: ['./last-view.component.scss']
})
export class LastViewComponent implements OnInit {

    public list: Array<TopPost> = new Array<TopPost>()
    public showBlock: boolean = true

    constructor(private http: HttpClient, private auth: AuthService) {
    }

    ngOnInit(): void {
        if (this.auth.isAuthenticated){
            this.http.get(environment.restUrl+"/api/v1/metrika/get-last-view")
                .subscribe((result:any) => {
                    if (result.status == "success"){
                        this.list = result.data
                    }
                }, error => {
                    this.showBlock = false
                })
        }
    }

}
