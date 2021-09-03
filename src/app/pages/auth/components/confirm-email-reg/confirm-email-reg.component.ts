import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Breadcrumb} from "../../../../models/Breadcrumb";
import {Users} from "../../../../models/Users";

@Component({
    selector: 'app-confirm-email-reg',
    templateUrl: './confirm-email-reg.component.html',
    styleUrls: ['./confirm-email-reg.component.scss']
})
export class ConfirmEmailRegComponent implements OnInit {
    public breadcrumbList: Array<Breadcrumb> = new Array<Breadcrumb>()
    public message: String = ""
    public buttonUrl: boolean = false
    private code: string | null = null

    constructor(private auth: AuthService, private router: Router, private http: HttpClient, private currenRouter: ActivatedRoute) {
        this.breadcrumbList.push({name: "Активация учетной записи", url: null})
        this.code = this.currenRouter.snapshot.params["code"]
    }

    ngOnInit(): void {
        this.http.post(environment.restUrl+"/api/v1/activate-account", {"code": this.code})
            .subscribe((result:any) => {

                if (result.status == "success"){
                    this.auth.loginAfterConfirmEmail(result.user)
                    this.auth.currentUser.subscribe((user: Users) => {
                        this.message = "Ваша учетная запись активирована. <br> Благодарим за регистрацию"
                        this.buttonUrl = true
                    })
                }
            }, error => {
                this.message = error.error.message
            })
    }

}
