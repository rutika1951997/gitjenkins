import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { NfComponent } from './nf/nf.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    RegisterComponent,
    NfComponent,
    LoginComponent,
    EditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home',component:HomeComponent},
      {path: 'login',component:LoginComponent },
      {path: 'about',component:AboutComponent },
      {path: 'edit/:No',component:EditComponent},
      {path: 'contact',component:ContactComponent },
      {path: 'register',component:RegisterComponent},
      {path: '**',component:NfComponent }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
