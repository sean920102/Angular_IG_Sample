import { Component, OnInit } from '@angular/core';
import { PostCommandService } from './../../../_Services/post-command.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  userinfo:any={
    account : '',
    name : ''
  };
  constructor(
    private _post: PostCommandService
  ) { }

  ngOnInit(): void {
    this._post.userInfoSubject.subscribe((content: any) => {
      this.userinfo={
        account : content[0].display_name,
        name : content[0].fullname
      }
    });
  }
}
