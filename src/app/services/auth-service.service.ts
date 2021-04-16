import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Users} from "../models/Users";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<Users>;
    public currentUser: Observable<Users>;

    constructor(private http: HttpClient) {
        let bean: string | null = localStorage.getItem('bean')
        if (bean){
            bean = JSON.parse(atob(bean))
        }
        // @ts-ignore
        this.currentUserSubject = new BehaviorSubject<Users>(bean);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Users {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(environment.restUrl+"/api/v1/login", { email, password })
            .pipe(map(user => {
                // пользователь залогинился и получил токен
                if (user && user.token) {
                    // сохраняем всю полученную инфу от сервера
                    localStorage.setItem('bean', btoa(JSON.stringify(user)));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // Удаляем всю сохраненную информацию о пользователе и разлогиниваемся
        localStorage.removeItem('bean');
        // @ts-ignore
        this.currentUserSubject.next(null);
    }

}
