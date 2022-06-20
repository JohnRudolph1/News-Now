import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import {HttpClientModule} from "@angular/common/http";
import {NewsapiservicesService} from "./service/newsapiservices.service";
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechComponent,
    BusinessComponent,
    HealthComponent,
    EntertainmentComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
