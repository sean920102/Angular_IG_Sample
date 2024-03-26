import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {ExporeComponent} from './../main/expore/expore.component';
import {MessageComponent} from './../main/message/message.component';
import { MainComponent } from './../main/main/main.component';
import { FollowingComponent } from './../following/following.component';
import { AccountComponent } from './../account/account.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    loadChildren: () => import('./home.module').then(m => m.HomeModule),
    children:[
      { path: 'home', component: MainComponent },
      { path: 'home/:id', component: AccountComponent },
      // { path: 'expore', component: ExporeComponent },
      // { path: 'message', component: MessageComponent },
      { path: 'following', component: FollowingComponent },

    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
