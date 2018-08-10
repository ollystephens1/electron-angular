import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRouter } from './home.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRouter,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
