import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Rachel\'s \"Traditional\" English Trifle', 
               'Custard, good. Jam, good. Meat, good!', 
               'https://i.pinimg.com/originals/9b/77/41/9b77416e98022213ce03a08043538747.jpg'),
    new Recipe('Tartiflette', 
               'Like we had when we went sking in the Alps.', 
               'https://image.afcdn.com/recipe/20160401/38946_w420h344c1cx2690cy1793.jpg')               
  ];

  // only get a copy
  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe() {

  }

  constructor() { }
}
