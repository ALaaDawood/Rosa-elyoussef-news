import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path : '', component : IndexComponent},
  {path : 'home/:id', component: HomeComponent},
  {path : 'news-details/:id', component: NewsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
