import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { LanguagesComponent } from './languages/languages.component';
import { HttpClientModule } from '@angular/common/http';
import { LanguageItemComponent } from './language-item/language-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'languages', component: LanguagesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    LanguagesComponent,
    LanguageItemComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
