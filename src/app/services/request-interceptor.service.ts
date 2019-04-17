import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

    constructor(private toastrService: ToastrService, private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiKey = 'oLgsnTpwxS0PEuEPcsqAu0XlhJhEyaRb';
        /** inject static apiKey in each request */
        request = request.clone({
            setParams: {
                apikey: apiKey
            }
        });
        return next.handle(request).pipe(
            tap(
                () => {
                },
                error => {
                    if (error instanceof HttpErrorResponse) {
                        /** status code not detected due CORS */
                        this.toastrService.error(error.statusText);
                        this.router.navigate(['']);
                    }
                }
            )
        );
    }
}
