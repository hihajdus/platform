import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'details', component: DetailsComponent },
	{ path: 'todo', component: TodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
