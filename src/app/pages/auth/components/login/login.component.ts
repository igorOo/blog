import {Component, OnInit} from '@angular/core';
import {Breadcrumb} from "../../../../models/Breadcrumb"
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../services/auth-service.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    private minPassword: number = 6
    public  breadcrumbList: Array<Breadcrumb> = new Array<Breadcrumb>()
    public form: FormGroup = new FormGroup({
        email: new FormControl("", Validators.required),
        password: new FormControl("", [Validators.required, Validators.minLength(this.minPassword)]),
        remember: new FormControl(false)
    })
    public emailError: string = ""
    public passwordError: string = ""
    public invalidState: boolean = false
    public responseError: string = ""
    public resetMessage: string = ""

    constructor(private  http: HttpClient, private router: Router, private auth: AuthService, private currentRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        let message = this.currentRoute.snapshot.params["reset"]
        if (message !== undefined){
            this.resetMessage = "Пароль успешно сброшен"
        }
        this.breadcrumbList.push({name: "Вход в систему", url: null})
    }

    formSubmit(event: Event) {
        event.preventDefault()
        if (this.form.get('email')?.invalid){
            this.emailError = "Email не может быть пустым"
            this.invalidState = true
            return
        }
        if (this.form.get("password")?.invalid){
           if (this.form.get("password")?.errors?.required){
               this.passwordError = "Пароль не может быть пустым"
               this.invalidState = true
               return
           }
           if (this.form.get("password")?.errors?.minLength){
               this.passwordError = "Минимальная длина пароля "+this.minPassword
               this.invalidState = true
               return
           }
        }
        this.auth.login(this.form.get("email")?.value, this.form.get("password")?.value)
            .subscribe(result => {
                if (result.token){
                    this.router.navigate(["/"])
                }
            }, error => {
                if (error.status == 401){
                    this.responseError = 'Такие имя пользователя и пароль не найдены'
                }
            })
    }

    inputText(){
        this.emailError = this.passwordError = ""
    }
}
