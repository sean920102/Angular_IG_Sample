import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() users:user[]=[
    {id:'sean1234',name:'sean'},
    {id:'keven1234',name:'keven'},
    {id:'ryan1234',name:'ryan'},
    {id:'sean1234',name:'sean'},
    {id:'keven1234',name:'keven'},
    {id:'ryan1234',name:'ryan'},
    {id:'sean1234',name:'sean'},
    {id:'keven1234',name:'keven'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

export interface user {
  id:string
  name:string;
}