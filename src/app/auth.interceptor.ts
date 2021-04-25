import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let bean:any = localStorage.getItem('bean')
        if (bean){
            try{
                bean = JSON.parse(atob(bean))
            }catch (e){
                return next.handle(req)
            }
            let headers = req.headers.append("Authorization", "Bearer "+bean.token)
            let reqCloned = req.clone({
                headers: headers
            });
            return next.handle(reqCloned)
        }else{
            return next.handle(req)
        }
    }
}
