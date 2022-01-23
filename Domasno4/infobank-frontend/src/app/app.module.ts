import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { NavigatorComponent } from './components/navigator/navigator.component';
import { DetailsComponent } from './components/details/details.component';
import {MapComponent} from "./components/map/map.component";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavigatorComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
