import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {LoginComponent} from '../../dialog/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: { title: string, link: string }[] = [];
  constructor(
    public dialog: MatDialog,
  ) { 
  }

  ngOnInit(): void {
  }
  login(){
    this.dialog.open(LoginComponent,{
      width: '500px',
    });
  }

}
