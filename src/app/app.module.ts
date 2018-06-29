import { SharedModule } from './modules/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouter } from './app.routing';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRouter],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
