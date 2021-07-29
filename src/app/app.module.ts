import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { GuardServiceModule } from './services/guard/guard-service.module';
import { HttpHandlersServiceModule } from './services/http-handlers/http-handlers-service.module';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FormModule } from './components/form/form.module';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from './components/loading/loading.module';
import { CardModule } from './components/card/card.module';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    GuardServiceModule,
    HttpHandlersServiceModule,
    LoadingModule,
    MatToolbarModule,
    FormModule,
    CardModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
