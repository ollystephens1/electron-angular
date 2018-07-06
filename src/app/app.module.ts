import { SharedModule } from './modules/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRouter } from './app.routing';
import { AppComponent } from './app.component';
import { ToasterModule, ToasterService } from 'angular2-toaster';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouter,
    ToasterModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
