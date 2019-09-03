import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGuardService } from './main-guard.service';
import { RouteGuardService } from './route-guard.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [MainGuardService, RouteGuardService]
})
export class GuardServiceModule { }
