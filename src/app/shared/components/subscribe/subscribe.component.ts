import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

    // @ts-ignore
    @ViewChild('subscribeError') errorRef: ElementRef
    // @ts-ignore
    @ViewChild('subscribeSucces') successRef: ElementRef

    public form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        fuckingBot: new FormControl('', Validators.maxLength(0))
    })
    public invalidState: boolean = false

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
    }

    submitForm(event: Event): void{
        event.preventDefault()
        if (this.form.get('email')?.invalid && this.form.get('email')?.touched){
            this.errorRef.nativeElement.innerHTML = "Введите адрес электронной почты"
            this.invalidState = true
            return
        }
        if (this.form.get("fuckingBot")?.invalid){
            this.errorRef.nativeElement.innerHTML = "Роботам здесь не место"
            this.invalidState = true
            return
        }

        let formData: any = new FormData()
        formData.append("email", this.form.get("email")?.value)
        formData.append("fuckingBot", this.form.get("fuckingBot")?.value)
        this.http.post(environment.restUrl+"/api/v1/subscribe/add", formData)
            .subscribe((result: any) => {
                if (result.status !== undefined && result.status == "success"){
                    this.successRef.nativeElement.innerHTML = "Вы успешно подписаны на новые новости";
                }else{
                    this.errorRef.nativeElement.innerHTML = "Что-то пошло не так :(";
                }
                this.form.reset()
            }, error => {
                if(error.error !== undefined){
                    this.errorRef.nativeElement.innerHTML = error.error.message;
                }else{
                    this.errorRef.nativeElement.innerHTML = error.message;
                }
            })
    }

    clearError() {
        this.errorRef.nativeElement.innerHTML = ""
        this.invalidState = false
    }
}
