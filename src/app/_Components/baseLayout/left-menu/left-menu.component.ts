import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('/login');
  }
}
