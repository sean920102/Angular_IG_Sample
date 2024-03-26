import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostCommandService } from './../../_Services/post-command.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private postUrl: string = `${environment.api.baseAddress2}`;

  email:string="sean@jccsoftware.com";
  password:string = "good1234";
  url:string = "http://localhost:3001";
  constructor(
    private _http: HttpClient,
    private _post: PostCommandService
    ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  login(){
    this._post.authCommand(this.email,this.password);
  }
  get(){
    this._http.get<any>(this.url).subscribe(data => {
      console.log(data)
    }); 
  }
  getProduct(){
    this._http.get<any>(this.postUrl+"products").subscribe(data => {
      console.log("Data :"+data)
    });
  }
}
