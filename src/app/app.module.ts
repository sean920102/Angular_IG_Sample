import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PostCommandService} from './_Services/post-command.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './_Components/baseLayout/navbar/navbar.component';
import { FooterComponent } from './_Components/baseLayout/footer/footer.component';
import { SearchComponent } from './_Components/baseLayout/search/search.component';
import { LoginComponent } from './_Components/dialog/login/login.component';

import { PhotoComponent } from './pages/main/_Components/photo/photo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MiddlewaresService } from './_Services/middlewares.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:MiddlewaresService,
      multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
