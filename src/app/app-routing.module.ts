import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch : "full" },
  { path : 'sign-in', component : SignInComponent },
  { path : 'sign-up', component : SignUpComponent },
  { path: 'header', component : HeaderComponent },
  {path: 'dashboard', component: ShopingCartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
