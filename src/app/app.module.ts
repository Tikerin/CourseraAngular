import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FlexLayoutModule} from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './menu/dishdetail/dishdetail.component';

// decorators it's function which modify JS classes 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent              // declare that this view Class belong to this particular module
  ],
  imports: [                  //need to be used with AppModule
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatToolbarModule,    
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],              // specify which modules it will use
  bootstrap: [AppComponent]   // bootstrap AppComponent(root component)
})
export class AppModule { }
