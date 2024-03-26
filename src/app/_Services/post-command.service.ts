import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { CommonHandleService } from './common-handle.service';
import { Router, RouterModule } from '@angular/router';
import { Subject, Subscription, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostCommandService {
  // private postUrl: string = `${environment.api.baseAddress}/${environment.api.APIEndpoint.EFEMServer}`;
  private postUrl: string = `${environment.api.baseAddress}`;
  userInfoSubject: ReplaySubject<any[]>;

  constructor(
    private router: Router,
    private _httpClient: HttpClient,
  ) { 
    this.userInfoSubject = new ReplaySubject<any[]>();
  }
  postCommand(url: string, postBody: any): Observable<Array<any>> {
    console.log(this.postUrl+url,postBody)

    return this._httpClient.post<Array<any>>(
      this.postUrl+url,
      postBody
    );
  }

  sendCommand(url: string, body?: {}) {
    this.postCommand(url, body == null ? {} : body)
    .subscribe(
      (res:any) =>{
        console.log(res);
        this.userInfoSubject.next(res.data);
        // this._commonHandleService.handle_PostCommandResult(x)
      } 
    )
  }
  signUpCommand(payload:any){
    let url = 'v1/user';
    this.postCommand(url, payload)
    .subscribe(
      (res:any) => {
        if(res.status==200){
          this.router.navigateByUrl('/login');
        }
        else{
          alert('註冊失敗')
        }
      }
    )
  }
  authCommand(email:string,password:string){
    let url = 'v1/login';
    let payload:any = {
      email:email,
      password:password
    }
    // this.postCommand(url, payload)
    this._httpClient.post<Array<any>>(this.postUrl+url,
      payload
    )
    .subscribe(
      (res:any) => {
        console.log(res);
        if(res.status==200){
          localStorage.setItem('jwt',res.token.accessToken);
          localStorage.setItem('email',payload.email);
          this.router.navigateByUrl('/home');
        }
        else{
          alert('登入失敗')
        }
      }
    )
    
  }
}