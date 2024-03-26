import { Component, OnInit } from '@angular/core';
import { PostCommandService } from './../../_Services/post-command.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userinfo:any;
  constructor(
    private _post: PostCommandService
  ) { }

  ngOnInit(): void {
    this.getinfo();
  }
  getinfo(){
    const email = localStorage.getItem('email');
    this._post.sendCommand('api/v1/userinfo',{email:email});
  }
}
