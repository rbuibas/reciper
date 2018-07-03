import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
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
    const url = 'https://recipe-book-rbuibas.firebaseio.com/recipes.json';

    // return this.httpClient.put('https://recipe-book-rbuibas.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: logInparams
    //   // headers: new HttpHeaders().set('Test_entry', 'test') // check if this works TODO
    // });

    // so we can listen to the progress (manually create request) / won't work on put()
    const request = new HttpRequest('PUT', url, this.recipeService.getRecipes(), {
      reportProgress: true,
      params: logInparams // with this you can listen (subscribe) and use 'total' and 'loaded' params to calculate the progress bar
    });
    return this.httpClient.request(request);

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
