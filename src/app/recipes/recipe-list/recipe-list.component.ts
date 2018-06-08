import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Rachel\'s \"Traditional\" English Trifle', 
               'Custard, good. Jam, good. Meat, good!', 
               'https://i.pinimg.com/originals/9b/77/41/9b77416e98022213ce03a08043538747.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
