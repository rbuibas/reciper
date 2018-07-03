import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  storeData() {
    const token = this.authService.getToekn();
    const logInparams = new HttpParams().set('auth', token);
    return this.httpClient.put('https://recipe-book-rbuibas.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      observe: 'body',
      params: logInparams
      // headers: new HttpHeaders().set('Test_entry', 'test') // check if this works TODO
    });
  }

  fetchData() {

    const token = this.authService.getToekn();
    const logInparams = new HttpParams().set('auth', token);
    // return this.httpClient.get<Recipe[]>('https://recipe-book-rbuibas.firebaseio.com/recipes.json?auth=' + token)
    return this.httpClient.get<Recipe[]>('https://recipe-book-rbuibas.firebaseio.com/recipes.json', {
      observe: 'body', // get the whole response
      responseType: 'json', // default is json; blob for downloading a file
      params: logInparams
    })
    .pipe(map(
      (recipes) => { // assumes we get JSON
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )).subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

}
