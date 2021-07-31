import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {News} from "../../../../../../models/News";
import {TopPost} from "../../../../../index/interfaces/TopPost";
import {AuthService} from "../../../../../../services/auth-service.service";
import Swal from "sweetalert2";

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

    public loading: boolean = false
    public list!: Array<TopPost>
    public page: number = 1
    public lastPage: number = 1

    constructor(
        private http: HttpClient,
        private authService: AuthService,
    ) {
    }

    ngOnInit(): void {
        this.loadData()

    }

    loadData(): void{
        this.loading = true
        this.http.get(environment.restUrl + "/api/v1/bookmarks/list/"+this.page)
            .subscribe((result:any) => {
                this.list = result.data
                this.loading = false
            }, error => {
                this.loading = false
            })
    }

    deleteFromFavorite(post_id: number) {
        const currentUser = this.authService.currentUserValue;
        Swal.fire({
            title: 'Удаление статьи из избранного',
            text: "Действительно удалить статью из избранного?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Удалить',
            cancelButtonText: 'Я передумал'
        }).then((result) => {
            if (result.isConfirmed) {
                this.http.post(environment.restUrl + "/api/v1/bookmarks/delete/"+post_id+"/"+currentUser.id, {})
                    .subscribe((result:any) => {
                        if (result.status == "success"){
                            this.list.map((item, key) => {
                                if (item.id === post_id){
                                    this.list.splice(key, 1)
                                }
                            })
                            Swal.fire('Удаление избранной статьи',
                                'Статья удалена из избранного',
                                'success')
                        }else{
                            Swal.fire('Удаление избранной статьи',
                                'Вохникла ошибка при удалении статьи из избранного',
                                'error')
                        }
                    }, error => {
                        Swal.fire('Удаление избранной статьи',
                            'Вохникла ошибка при удалении статьи из избранного',
                            'error')
                    })
            }
        })

    }
}
