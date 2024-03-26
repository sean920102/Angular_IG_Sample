import { Component, OnInit } from '@angular/core';
import { PostCommandService } from './../../_Services/post-command.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email:string="";
  password:string = "";
  username:string = "";
  fullname:string ="";
  constructor(
    private _post: PostCommandService
  ) { }

  ngOnInit(): void {
  }
  signUp(){
    let payload={
      email:this.email,
      password:this.password,
      display_name:this.username,
      fullname:this.fullname
    }
    this._post.signUpCommand(payload);
  }
}
