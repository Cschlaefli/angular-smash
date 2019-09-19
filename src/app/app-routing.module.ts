import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CharacterListComponent } from './character-list/character-list.component';

const routes: Routes = [
  {path : '', redirectTo : 'character-list', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'character-list', component : CharacterListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
