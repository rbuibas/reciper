import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Rachel\'s \"Traditional\" English Trifle', 
               'Custard, good. Jam, good. Meat, good!', 
               'https://i.pinimg.com/originals/9b/77/41/9b77416e98022213ce03a08043538747.jpg',
              [
                new Ingredient('Meat', 2),
                new Ingredient('Custard', 10),
                new Ingredient('Jam', 2),
                new Ingredient('Eggs', 4)
              ]),
    new Recipe('Tartiflette', 
               'Like we had when we went sking in the Alps.', 
               'https://image.afcdn.com/recipe/20160401/38946_w420h344c1cx2690cy1793.jpg',
              [
                new Ingredient('Patatas', 5),
                new Ingredient('Cheese', 2),
                new Ingredient('Olives', 12)
              ])               
  ];

  constructor(private slSrv: ShoppingListService) { }

  // only get a copy
  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe() {

  }

  addIngredientsToSL(ings: Ingredient[]) {
    this.slSrv.addIngredients(ings);
  }
}
