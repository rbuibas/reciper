import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() highRecipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Rachel\'s \"Traditional\" English Trifle', 
               'Custard, good. Jam, good. Meat, good!', 
               'https://i.pinimg.com/originals/9b/77/41/9b77416e98022213ce03a08043538747.jpg'),
    new Recipe('Tartiflette', 
               'Like we had when we went sking in the Alps.', 
               'https://image.afcdn.com/recipe/20160401/38946_w420h344c1cx2690cy1793.jpg')               
  ];

  constructor() { }

  ngOnInit() {
  }

  higherRecipeSelected(recipeToEmit: Recipe) {
    this.highRecipeSelected.emit(recipeToEmit);
  }

}
