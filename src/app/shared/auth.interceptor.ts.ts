import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercepted: ', req);
        const copiedRequest = req.clone({
            params: req.params.set('auth', this.authService.getToekn())
        });
        return next.handle(copiedRequest); // just continue the journey
        // by default requests are immutable.. hmm... but what about retrying it ? maybe clone it ?
    }
}
