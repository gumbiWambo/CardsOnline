import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { MarketModule } from './market/market.module';
import { MatchfieldModule } from './matchfield/matchfield.module';
import { RulesModule } from './rules/rules.module';
import { DeckConfigureModule } from './deck-configure/deck-configure.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    MarketModule,
    MatchfieldModule,
    RulesModule,
    DeckConfigureModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
