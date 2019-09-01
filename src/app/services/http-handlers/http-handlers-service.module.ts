import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockBackEndService } from './mock-back-end.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide:  HTTP_INTERCEPTORS,
      useClass: MockBackEndService,
      multi: true
    }
  ]
})
export class HttpHandlersServiceModule { }
