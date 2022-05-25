import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/main/app.component';
import {VariableExampleModule} from "./modules/variable-example/variable-example.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VariableExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
