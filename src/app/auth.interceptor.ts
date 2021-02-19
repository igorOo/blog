import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let reqCloned = req.clone({
            headers: req.headers.append("Authorization", "Basic YW5nMzY0NzpwYXNzJDM2NDc=")
        });
        return next.handle(reqCloned)
    }
}
