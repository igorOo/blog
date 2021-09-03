import {Component, OnInit} from '@angular/core';
import {Breadcrumb} from "../../../../models/Breadcrumb";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth-service.service";
import {Router} from "@angular/router";
import {BlogValidators} from "../../../../validators/ConfirmPasswordValidator";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    private minPassword: number = 6
    public breadcrumbList: Array<Breadcrumb> = new Array<Breadcrumb>()
    public form: FormGroup = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
        password: new FormControl("", [Validators.required, Validators.minLength(this.minPassword)]),
        confirmPassword: new FormControl("", [
            Validators.required,
            Validators.minLength(this.minPassword),
            BlogValidators.confirmPassword()
        ]),
    })
    emailError: string = ""
    passwordError: string = ""
    confirmPasswordError: string = ""
    public invalidState: boolean = false
    responseError: string = ""
    registerMessageComplete: string = ""

    constructor(private auth: AuthService, private router: Router) {
    }

    ngOnInit(): void {
        this.breadcrumbList.push({name: "Регистрация пользователя", url: null})
    }

    inputText(){
        this.emailError = this.passwordError = this.confirmPasswordError = ""
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
            if (this.form.get("confirmPassword")?.errors?.minLength){
                this.confirmPasswordError = "Минимальная длина пароля "+this.minPassword
                this.invalidState = true
                return
            }
        }
        this.auth.register(this.form.get("email")?.value,this.form.get("password")?.value, this.form.get("confirmPassword")?.value)
            .subscribe(result => {
                if (result.status == "success"){
                    this.registerMessageComplete = "Для завершения регистрации на Вашу почту, которую вы указали, отправлено письмо с подтвеждением регистрации."
                }
                this.router.navigate(["/user/register-message"])
            })
    }
}
