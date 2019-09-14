import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserComponent } from './components/user/user/user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';


const routes: Routes = [
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'user/add',
    component: AddUserComponent
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
