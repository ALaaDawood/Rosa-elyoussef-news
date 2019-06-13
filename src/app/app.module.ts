import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TopNewsComponent } from './shared/top-news/top-news.component';
import { RecommendedNewsComponent } from './shared/recommended-news/recommended-news.component';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopNewsComponent,
    RecommendedNewsComponent,
    HomeComponent,
    DepartmentComponent,
    NewsDetailsComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
