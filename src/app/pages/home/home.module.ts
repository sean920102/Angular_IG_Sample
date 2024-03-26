import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LeftMenuComponent } from './../../_Components/baseLayout/left-menu/left-menu.component';
import { PhotoComponent } from './../main/_Components/photo/photo.component';
import { ExporeComponent } from './../main/expore/expore.component';
import { MessageComponent } from './../main/message/message.component';
import { MainComponent } from './../main/main/main.component';
import { CardComponent } from './../main/card/card.component';
import { FollowingComponent } from './../following/following.component';
import { AccountComponent } from './../account/account.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    HomeComponent,
    LeftMenuComponent,
    ExporeComponent,
    MessageComponent,
    MainComponent,
    PhotoComponent,
    CardComponent,
    FollowingComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule
  ]
})
export class HomeModule { }
