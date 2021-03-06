import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from '../app/admin/admin.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// import InMemoryWebApi
// import { InMemoryDataService } from '../app/in-memory-api/in-memory-data-service';
// import { environment as env } from '../environments/environment';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryData } from '../app/in-memory-api/in-memory-data';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { LoginService } from '../app/shared/login.service';
import { JwtService } from '../app/shared/jwt.service';
import { JwtInterceptorService } from '../app/shared/jwt-Interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryData, { delay: 1000 }),

  ],
  providers: [LoginService, JwtService, JwtInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
