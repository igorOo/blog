import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ProfileService} from "../ProfileService";
import {Users} from "../../../../../../models/Users";
import {environment} from "../../../../../../../environments/environment";
import {Router} from "@angular/router";

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    public loading: boolean = false
    public user!: Users
    public select: Map<string, string> = new Map<string, string>()

    public form: FormGroup = new FormGroup({
        first_name: new FormControl(''),
        last_name: new FormControl(''),
        gender: new FormControl(''),
        birth: new FormControl(''),
        about: new FormControl('')
    })

    constructor(
        private http: HttpClient,
        private profileService: ProfileService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.select.set("MALE", 'Мужской')
        this.select.set("FEMALE", "Женский")
        this.profileService.user.subscribe(user => {
            // @ts-ignore
            this.user = user
            this.form.get("first_name")?.setValue(this.user.firstName)
            this.form.get("last_name")?.setValue(this.user.lastName)
            this.form.get("gender")?.setValue(this.user.gender)
            this.form.get("birth")?.setValue(this.user.birthDate)
            this.form.get("about")?.setValue(this.user.about)
            this.loading = false
        })
    }

    submitForm(event: Event):void {
        event.preventDefault()
        let data:any = {}
        data["firstName"] =this.form.get("first_name")?.value
        data["lastName"] = this.form.get("last_name")?.value
        data["gender"] = this.form.get("gender")?.value
        data["birth"] = this.form.get("birth")?.value
        data["about"] = this.form.get("about")?.value
        this.http.post(environment.restUrl+"/api/v1/user/profile/edit", data)
            .subscribe((result:any) => {
                if (result.status == "success"){
                    this.profileService.result.next("success")
                    this.router.navigate(["/profile"])
                }
            }, error => {
                this.profileService.result.next("error")
                this.router.navigate(["/profile"])
            })
    }
}
