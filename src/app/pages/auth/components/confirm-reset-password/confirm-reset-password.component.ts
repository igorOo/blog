import {Component, OnInit} from '@angular/core';
import {Breadcrumb} from "../../../../models/Breadcrumb";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Component({
    selector: 'app-confirm-reset-password',
    templateUrl: './confirm-reset-password.component.html',
    styleUrls: ['./confirm-reset-password.component.scss']
})
export class ConfirmResetPasswordComponent implements OnInit {
    public breadcrumbList: Array<Breadcrumb> = new Array<Breadcrumb>()
    public responseError: string = ""
    public responseText: string = ""
    public form: FormGroup = new FormGroup({
        password: new FormControl("", [Validators.required]),
        confirmPassword: new FormControl("", [Validators.required])
    })
    public passwordError: string = ""
    public confirmPasswordError: string = ""
    public invalidState: boolean = false
    public loading: boolean = true;

    constructor(private auth: AuthService, private router: Router, private http: HttpClient, private currenRouter: ActivatedRoute) {
        this.breadcrumbList.push({name: "Восстановление пароля", url: null})
    }

    ngOnInit(): void {
        this.http.post(environment.restUrl + "/api/v1/reset-password-code", {code: this.currenRouter.snapshot.params["code"]})
            .subscribe((result:any) => {
                if (result.status == "success"){
                    this.loading = false
                }
            }, (error:any) => {
                this.responseError = error.error.message
            })
    }

    inputText() {

    }

    formSubmit(event: Event) {
        event.preventDefault()

    }
}
