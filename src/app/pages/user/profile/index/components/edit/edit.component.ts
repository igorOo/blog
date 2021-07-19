import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ProfileService} from "../ProfileService";
import {Users} from "../../../../../../models/Users";
import {environment} from "../../../../../../../environments/environment";
import {Router} from "@angular/router";
import {AvatarService} from "../../service/AvatarService/avatar-service.service";
import {File} from "@angular/compiler-cli/src/ngtsc/file_system/testing/src/mock_file_system";

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    public loading: boolean = false
    public user!: Users
    public select: Map<string, string> = new Map<string, string>()
    public avatar: File | null = null
    public avatarBase64: string = ""
    private fileReader = new FileReader()
    public fileName: string = ''

    public form: FormGroup = new FormGroup({
        first_name: new FormControl(''),
        last_name: new FormControl(''),
        gender: new FormControl(''),
        birth: new FormControl(''),
        about: new FormControl(''),
    })

    constructor(
        private http: HttpClient,
        private profileService: ProfileService,
        private router: Router,
        private avatarService: AvatarService
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
        let formData = new FormData()
        formData.append("firstName", this.form.get("first_name")?.value)
        formData.append("lastName", this.form.get("last_name")?.value)
        formData.append("gender", this.form.get("gender")?.value)
        formData.append("birth", this.form.get("birth")?.value)
        formData.append("about", this.form.get("about")?.value)
        if (this.avatar !== null){
            // @ts-ignore
            formData.append("avatar", this.avatar)
        }
        // data["firstName"] =this.form.get("first_name")?.value
        // data["lastName"] = this.form.get("last_name")?.value
        // data["gender"] = this.form.get("gender")?.value
        // data["birth"] = this.form.get("birth")?.value
        // data["about"] = this.form.get("about")?.value
        this.http.post(environment.restUrl+"/api/v1/user/profile/edit", formData)
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

    changeAvatar(event: Event): void {
        let files = (<HTMLInputElement>event.target)
        if (files.files !== null){
            // @ts-ignore
            this.avatar = (files.files)[0]
            // @ts-ignore
            this.fileName = this.avatar?.name
            this.readFile(this.avatar)
        }

    }

    private readFile(file: any) {
        let result:string | ArrayBuffer | null = ''
        this.fileReader.onload = () => {
            result = this.fileReader.result
            this.avatarBase64 = <string>result
            this.avatarService.changeAvatar(this.avatarBase64)
        };
        this.fileReader.readAsDataURL(file);
    }
}
