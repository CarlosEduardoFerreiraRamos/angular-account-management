import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import  {MatInputModule} from "@angular/material/input"
  import  {MatButtonModule} from "@angular/material/button"
  import  {MatIconModule} from "@angular/material/icon"
  import  {MatCheckboxModule} from "@angular/material/checkbox"

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UserServiceModule } from '../../../app/services/user/user-service.module';
import { ListModule } from '../../../app/components/list/list.module';
import { FormModule } from '../../../app/components/form/form.module';
import { FormsModule } from '@angular/forms';
import { UsersFormComponent } from './users-form/users-form.component';
import { UserResolverService } from '../../services/resolvers/user/user-resolver.service';
import { CardModule } from '../../components/card/card.module';
import { LoadingModule } from '../../components/loading/loading.module';


@NgModule({
  declarations: [
    UsersListComponent,
    UsersDetailComponent,
    UsersFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UserServiceModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    LoadingModule,
    CardModule,
    ListModule,
    FormModule,
    FormsModule
  ],
  providers: [UserResolverService]
})
export class UsersModule { }
