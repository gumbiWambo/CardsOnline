import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { MarketComponent } from './market/market/market.component';
import { RulesComponent } from './rules/rules/rules.component';
import { MatchfieldComponent } from './matchfield/matchfield/matchfield.component';
import { DeckConfigureComponent } from './deck-configure/deck-configure/deck-configure.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'market', component: MarketComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'configure', component: DeckConfigureComponent},
  {path: 'matchfield', component: MatchfieldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
