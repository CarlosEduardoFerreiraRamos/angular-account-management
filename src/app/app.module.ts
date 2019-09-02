import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { GuardServiceModule } from './services/guard/guard-service.module';
import { HttpHandlersServiceModule } from './services/http-handlers/http-handlers-service.module';
import { MatCardModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FormModule } from './components/form/form.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    GuardServiceModule,
    HttpHandlersServiceModule,
    FormModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
