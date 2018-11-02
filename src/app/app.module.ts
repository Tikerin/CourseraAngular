import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';

import 'hammerjs';

// decorators it's function which modify JS classes 
@NgModule({
  declarations: [
    AppComponent              // declare that this view Class belong to this particular module
  ],
  imports: [                  //need to be used with AppModule
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [],              // specify which modules it will use
  bootstrap: [AppComponent]   // bootstrap AppComponent(root component)
})
export class AppModule { }
