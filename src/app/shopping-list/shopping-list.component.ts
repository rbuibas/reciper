import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private slServ: ShoppingListService) { }

  ingredients: Ingredient[];

  ngOnInit() {
    this.ingredients = this.slServ.getIngredients();
    this.slServ.ingredientsChanged.subscribe(
      (ingreds: Ingredient[]) => {
        this.ingredients = ingreds;
      }
    );
  }
}
