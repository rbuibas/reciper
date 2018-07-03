import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.httpClient.put('https://recipe-book-rbuibas.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  fetchData() {

    const token = this.authService.getToekn();

    return this.httpClient.get<Recipe[]>('https://recipe-book-rbuibas.firebaseio.com/recipes.json?auth=' + token)
    .pipe(map(
      (recipes) => { // assumes we get JSON
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
          return recipes;
        }
      }
    )).subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

}
