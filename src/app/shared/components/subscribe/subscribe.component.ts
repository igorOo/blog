import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

    // @ts-ignore
    @ViewChild('subscribeError') errorRef: ElementRef
    public form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        fuckingBot: new FormControl('', Validators.maxLength(0))
    })
    public invalidState: boolean = false

    constructor() {
    }

    ngOnInit(): void {
    }

    submitForm(): void{
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
    }

    clearError() {
        this.errorRef.nativeElement.innerHTML = ""
        this.invalidState = false
    }
}
