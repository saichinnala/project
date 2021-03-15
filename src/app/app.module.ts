import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BikeComponent } from './bike/bike.component';
import { ModalComponent } from './modal/modal.component';
import { ContactusComponent } from './contactus/contactus.component';
import {FormsModule} from '@angular/forms';
import { SquarePipe } from './square.pipe';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BikeComponent,
    ModalComponent,
    ContactusComponent,
    SquarePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
