import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Users} from "../../../../models/Users";
import {ProfileService} from "./components/ProfileService";
import Swal from "sweetalert2";
import {Subject} from "rxjs";
import {AvatarService} from "./service/AvatarService/avatar-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    @ViewChild("infoPassword") infoPassword!: ElementRef;

    public loading: boolean = true;
    public environment: any = environment
    public user!: Users
    public showModal: boolean = false

    public form: FormGroup = new FormGroup({
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
    })

    constructor(
        private http: HttpClient,
        private profileService: ProfileService,
        private avatarService: AvatarService,
    ) {
        this.avatarService.getAvatar().subscribe(image => {
            // @ts-ignore
            this.user.avatar = image
        })
    }

    ngOnInit(): void {
        this.http.get(environment.restUrl+"/api/v1/user/profile")
            .subscribe((result:any) => {
                this.user = result
                this.user.username = result.name
                this.user.birthDate = result.birth
                this.user.lastVisit = result.last_visit
                this.user.about = result.about
                this.user.dateCreate = result.date_create
                this.loading = false
                this.profileService.user.next(result)
                this.profileService.result.subscribe(result => {
                    if (result == "success"){
                        Swal.fire('Редактрирование профиля',
                            'Профиль изменен',
                            'success')
                    }else{
                        Swal.fire('Редактрирование профиля',
                            'Вохникла ошибка при редактировании профиля',
                            'error')
                    }
                })

            })


    }

    toggleModal(): void{
        this.showModal ? this.showModal = false : this.showModal = true
    }
    hideModal():void{
        this.showModal = false
    }
    clickOnModal(event: MouseEvent): void{
        event.stopPropagation()
        event.stopImmediatePropagation()
    }
    submitForm(event: Event) {
        event.preventDefault()
        if (this.form.get("password")?.value != this.form.get("confirmPassword")?.value){
            this.infoPassword.nativeElement.innerHTML = "Пароли не совпадают"
            this.infoPassword.nativeElement.classList.remove("alert-info")
            this.infoPassword.nativeElement.classList.add("alert-danger")
            return
        }
        let formData = new FormData()
        formData.append('password', this.form.get("password")?.value)
        formData.append("confirmPassword", this.form.get("confirmPassword")?.value)
        this.http.post(environment.restUrl+"/api/v1/user/profile/change-password", formData)
            .subscribe((result: any) => {
                if (result.status !== undefined && result.status == "success"){
                    this.infoPassword.nativeElement.innerHTML = "Пароль успешно изменен"
                    this.infoPassword.nativeElement.classList.add("alert-info")
                    this.infoPassword.nativeElement.classList.remove("alert-danger")
                }else{
                    this.infoPassword.nativeElement.innerHTML = "Что-то пошло не так :("
                    this.infoPassword.nativeElement.classList.remove("alert-info")
                    this.infoPassword.nativeElement.classList.add("alert-danger")

                }
                this.form.reset()
            }, error => {
                if(error.error !== undefined){
                    this.infoPassword.nativeElement.innerHTML = error.error.message
                    this.infoPassword.nativeElement.classList.remove("alert-info")
                    this.infoPassword.nativeElement.classList.add("alert-danger")
                }else{
                    this.infoPassword.nativeElement.innerHTML = error.message
                    this.infoPassword.nativeElement.classList.remove("alert-info")
                    this.infoPassword.nativeElement.classList.add("alert-danger")
                }
            })
    }

    inputPassword(): void{
        this.infoPassword.nativeElement.innerHTML = ""
        this.infoPassword.nativeElement.classList.remove("alert-info")
        this.infoPassword.nativeElement.classList.remove("alert-danger")
    }
}
