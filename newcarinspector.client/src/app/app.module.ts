import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import { GuestGarageComponent } from './guest-garage/guest-garage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CarsComponent,
    HomeComponent,
    GuestGarageComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
