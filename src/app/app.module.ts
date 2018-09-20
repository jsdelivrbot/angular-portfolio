import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { FourohfourComponent } from './components/fourohfour/fourohfour.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    FourohfourComponent
  ],
  imports: [BrowserModule, AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
