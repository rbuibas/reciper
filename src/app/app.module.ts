import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SnifferComponent } from './sniffer/sniffer.component';
import { SmallSnifferComponent } from './sniffer/small-sniffer/small-sniffer.component';
import { BigSnifferComponent } from './sniffer/big-sniffer/big-sniffer.component';

@NgModule({
  declarations: [
    AppComponent,
    SnifferComponent,
    SmallSnifferComponent,
    BigSnifferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
