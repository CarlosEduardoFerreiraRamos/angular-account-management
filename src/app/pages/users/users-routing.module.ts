import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UserResolverService } from '../../services/resolvers/user/user-resolver.service';
import { UsersFormComponent } from './users-form/users-form.component';
import { RouteGuardService } from '../../services/guard/route-guard.service';

const routes: Routes = [
  { path: '', component: UsersListComponent, data: { animation: 'ListPage' } },
  {
    path: 'profile',
    data: { userOnly: true, animation: 'ProfilePage' },
    resolve: { account: UserResolverService },
    component: UsersDetailComponent,
  },
  {
    path: 'detail/:id',
    data: { animation: 'FormPage' },
    canActivate: [RouteGuardService],
    resolve: { account: UserResolverService },
    component: UsersFormComponent,
  },
  {
    path: 'new',
    data: { newUser: true, animation: 'FormPage' },
    canActivate: [RouteGuardService],
    resolve: { account: UserResolverService },
    component: UsersFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
