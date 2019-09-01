import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UserServiceModule } from 'src/app/services/user/user-service.module';
import { ListModule } from 'src/app/components/list/list.module';
import { FormModule } from 'src/app/components/form/form.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersListComponent,
    UsersDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UserServiceModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ListModule,
    FormModule,
    FormsModule
  ]
})
export class UsersModule { }
