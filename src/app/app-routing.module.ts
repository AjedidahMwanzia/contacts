import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent, },
  {path: 'add',component: AddComponent, },
  { path: '', redirectTo: 'home',pathMatch: 'full',},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
