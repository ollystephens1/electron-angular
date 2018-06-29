import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HomeRouter } from './home.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, HomeRouter, SharedModule, HttpClientModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
