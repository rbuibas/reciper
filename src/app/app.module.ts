import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { SnifferModule } from './sniffer/sniffer.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // contains the CommonModule as well
    HttpModule,
    AppRoutingModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    SnifferModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
