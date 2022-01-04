import {Component, OnInit} from '@angular/core';
import {Breadcrumb} from "../../../../models/Breadcrumb";
import {AuthService} from "../../../../services/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../../../environments/environment";


@Component({
    selector: 'app-reset-password-mail',
    templateUrl: './reset-password-mail.component.html',
    styleUrls: ['./reset-password-mail.component.scss']
})
export class ResetPasswordMailComponent implements OnInit {
    public breadcrumbList: Array<Breadcrumb> = new Array<Breadcrumb>()
    public responseError: string = ""
    public responseText: string = ""
    public form: FormGroup = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email])
    })
    public emailError: string = ""
    public invalidState: boolean = false

    constructor(private auth: AuthService, private router: Router, private http: HttpClient, private currenRouter: ActivatedRoute) {
        this.breadcrumbList.push({name: "Восстановление пароля", url: null})
    }

    ngOnInit(): void {
    }

    inputText() {
        this.emailError = ""
    }

    formSubmit(event: Event) {
        event.preventDefault()
        if (this.form.get('email')?.invalid){
            this.emailError = "Email не может быть пустым"
            this.invalidState = true
            return
        }
        let formData = new FormData();
        formData.append("email", this.form.get("email")?.value)
        this.http.post(environment.restUrl+"/api/v1/reset-password", formData)
            .subscribe((result:any) => {
                this.responseText = result.message
            },
            error => {
                this.responseError = error.error.message
            })
    }
}
