import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { AuthService } from './auth/auth.service';
import { PersistenceService } from './shared/persistence.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { SnifferModule } from './sniffer/sniffer.module';
import { AuthGuardService } from './auth/auth-guard.service';
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
  providers: [
    ShoppingListService,
    RecipeService,
    PersistenceService,
    AuthService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
