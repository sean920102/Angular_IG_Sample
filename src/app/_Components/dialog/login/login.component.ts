import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostCommandService } from './../../../_Services/post-command.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string="";
  password:string = "";
  url:string = "http://localhost:3001";
  constructor(
    private _http: HttpClient,
    private _post: PostCommandService
    ) { }

  ngOnInit(): void {
  }
  // login(){
  //   this._post.authCommand();
  // }
  get(){
    this._http.get<any>(this.url).subscribe(data => {
      console.log(data)
    });
  }
}
