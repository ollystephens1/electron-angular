import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth/auth.guard';
import { SharedModule } from './modules/shared/shared.module';
import { AppRouter } from './app.routing';
import { AppComponent } from './app.component';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { LoginComponent } from './modules/login/login.component';
import { AuthService } from './auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule,
    ToasterModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ToasterService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
