import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FieldComponent } from './field/field.component';
import { ShopComponent } from './shop/shop.component';
import { AuthenticationComponent } from './authentication/authentication.component';


export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'game', component: FieldComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
