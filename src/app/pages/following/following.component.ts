import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  suggestion:any[]=[
    {account:'sean1234',name:'sean'},
    {account:'keven1234',name:'keven'},
    {account:'ryan1234',name:'ryan'},
    {account:'Jack1234',name:'jack'},
    {account:'keven1234',name:'keven'},
    {account:'ryan1234',name:'ryan'},
    {account:'sean1234',name:'sean'},
    {account:'keven1234',name:'keven'},
    {account:'keven1234',name:'keven'},
    {account:'ryan1234',name:'ryan'},
    {account:'sean1234',name:'sean'},
    {account:'keven1234',name:'keven'},
    {account:'keven1234',name:'keven'},
    {account:'ryan1234',name:'ryan'},
    {account:'sean1234',name:'sean'},
    {account:'keven1234',name:'keven'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
