import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainGuardService } from './services/guard/main-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', canActivate: [MainGuardService],  loadChildren: './pages/users/users.module#UsersModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
