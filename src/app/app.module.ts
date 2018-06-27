import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SnifferComponent } from './sniffer/sniffer.component';
import { SmallSnifferComponent } from './sniffer/small-sniffer/small-sniffer.component';
import { BigSnifferComponent } from './sniffer/big-sniffer/big-sniffer.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { PersistenceService } from './shared/persistence.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { RecipesModule } from './recipes/recipe.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SnifferComponent,
    SmallSnifferComponent,
    BigSnifferComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule, // contains the CommonModule as well
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RecipesModule,
    SharedModule
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
