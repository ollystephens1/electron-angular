import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRouter } from './clients.routing';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientAddComponent } from './components/client-add/client-add.component';

@NgModule({
  imports: [CommonModule, ClientsRouter, SharedModule, HttpClientModule],
  declarations: [HomeComponent, ClientAddComponent]
})
export class ClientsModule {}
