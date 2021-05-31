import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

    public form: FormGroup = new FormGroup({
        first_name: new FormControl(''),
        last_name: new FormControl(''),
        gender: new FormControl(''),
        birth: new FormControl(''),
        about: new FormControl('')
    })

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
    }

    submitForm(event: Event):void {
        event.preventDefault()
        let formData: any = new FormData()
        formData.append("first_name", this.form.get("first_name")?.value)
        formData.append("last_name", this.form.get("last_name")?.value)
        formData.append("gender", this.form.get("gender")?.value)
        formData.append("birth", this.form.get("birth")?.value)
        formData.append("about", this.form.get("about")?.value)

    }
}
