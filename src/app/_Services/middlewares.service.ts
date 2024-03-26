import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiddlewaresService implements HttpInterceptor {

  constructor(private injector: Injector, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      req = req.clone({
        setHeaders:{
          'Authorization':`bearer ${jwt}`
        }
      });
    }
    console.log(req);
    return next.handle(req)
    // return next.handle(req).pipe(
    //   map(event => {
    //     console.log(event);
    //     if (event instanceof HttpResponse) {
    //       switch (event.body.Status) {
    //         case 1: {
    //           event = this.success(event);
    //           break;
    //         }
    //         case 0: {
    //           event = this.error(event);
    //           break;
    //         }
    //         case -1: {
    //           event = this.error(event);
    //           this.router.navigate(['/login']);
    //           break;
    //         }
    //       }
    //     }
    //     return event;
    //   })
    // );
  }

  private success(event: any): any {
    if (event.body.Data) {
      return event.clone({ body: event.body.Data });
    } else {
      return event.clone({ body: true });
    }

  }

  private error(event: any): any {
    alert(event.body.Message);

    return event.clone({ body: false });
  }
}
