import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './authentication/authentication.module';
import { GameModule } from './game/game.module';
import { DeckModule } from './deck/deck.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    AuthenticationModule,
    GameModule,
    DeckModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
