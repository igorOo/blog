import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let bear = localStorage.getItem('bear')
        if (bear){
            let headers = req.headers.append("Authorization", "Bearer "+bear)
            let reqCloned = req.clone({
                headers: headers
            });
            return next.handle(reqCloned)
        }else{
            return next.handle(req)
        }
    }
}
