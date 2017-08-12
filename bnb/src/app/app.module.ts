import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';

import {AuthService} from './services/auth.service';
import { ReverseArrPipe } from './pipes/reverse-arr.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompanylistComponent } from './components/companylist/companylist.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { NewslistComponent } from './components/newslist/newslist.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';

const appRoutes: Routes = [
  {path:'news', component:NewsComponent},
  {path:'admin', component:DashboardComponent},
  {path:'admin/company', component: CompanylistComponent},
  {path:'admin/addcompany', component: AddCompanyComponent},
  {path:'admin/news', component: NewslistComponent},
  {path:'admin/addnews', component: AddNewsComponent},
  {path:'admin/newsdetail/:id', component: NewsDetailsComponent},
  {path:'admin/companydetail/:id', component: CompanyDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ReverseArrPipe,
    DashboardComponent,
    CompanylistComponent,
    AddCompanyComponent,
    CompanyDetailsComponent,
    NewslistComponent,
    AddNewsComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
