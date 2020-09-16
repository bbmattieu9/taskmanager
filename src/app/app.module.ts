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



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryData, { delay: 1000 }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
