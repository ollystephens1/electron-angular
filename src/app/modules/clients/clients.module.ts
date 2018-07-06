import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClientsRouter } from './clients.routing';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ClientAddComponent } from './components/client-add/client-add.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientResolver } from './resolvers/client.resolver';

@NgModule({
  imports: [
    CommonModule,
    ClientsRouter,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [HomeComponent, ClientAddComponent, ClientDetailsComponent],
  providers: [ClientResolver]
})
export class ClientsModule {}
