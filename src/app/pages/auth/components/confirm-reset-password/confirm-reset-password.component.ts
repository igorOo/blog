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
    private minPassword: number = 6
    public responseError: string = ""
    public responseText: string = ""
    public form: FormGroup = new FormGroup({
        password: new FormControl("", [Validators.required, Validators.minLength(this.minPassword)]),
        confirmPassword: new FormControl("", [Validators.required, Validators.minLength(this.minPassword)])
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
        this.passwordError = this.confirmPasswordError = ""

    }

    formSubmit(event: Event) {
        event.preventDefault()
        if (this.form.get("password")?.invalid){
            if (this.form.get("password")?.errors?.required){
                this.passwordError = "Пароль не может быть пустым"
                this.invalidState = true
                return
            }
            if (this.form.get("password")?.errors?.minlength !== undefined){
                this.passwordError = "Минимальная длина пароля "+this.minPassword + " символов"
                this.invalidState = true
                return
            }
        }
        if (this.form.get("confirmPassword")?.invalid){
            if (this.form.get("confirmPassword")?.errors?.passwordMismatch){
                this.confirmPasswordError = "Пароли не совпадают"
                this.invalidState = true
                return
            }
            if (this.form.get("confirmPassword")?.errors?.required){
                this.confirmPasswordError = "Подтверждение пароля не может быть пустым"
                this.invalidState = true
                return
            }
            if (this.form.get("confirmPassword")?.errors?.minlength){
                this.confirmPasswordError = "Минимальная длина пароля "+this.minPassword + " символов"
                this.invalidState = true
                return
            }
        }
        this.http.post(environment.restUrl + "/api/v1/change-password-finish", {
            code: this.currenRouter.snapshot.params["code"],
            password: this.form.get("password")?.value,
            confirmPassword: this.form.get("confirmPassword")?.value,
        })
            .subscribe((result:any) => {
                if (result.status == "success"){
                    this.router.navigate(["/login/reset"])
                }
            }, (error:any) => {
                this.responseError = error.error.message
            })
    }
}
