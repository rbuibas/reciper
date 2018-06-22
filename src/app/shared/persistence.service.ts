import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor(
    private http: Http,
    private recipeService: RecipeService
  ) { }

  storeData() {
    return this.http.put('https://recipe-book-rbuibas.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  fetchData() {
    return this.http.get('https://recipe-book-rbuibas.firebaseio.com/recipes.json')
      .subscribe(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          this.recipeService.setRecipes(recipes);
        }
      );
  }

}
