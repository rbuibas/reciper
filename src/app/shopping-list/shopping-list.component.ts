import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private subIngs: Subscription;

  constructor(private slServ: ShoppingListService) { }

  ingredients: Ingredient[];

  ngOnInit() {
    this.ingredients = this.slServ.getIngredients();
    this.subIngs = this.slServ.ingredientsChanged.subscribe(
      (ingreds: Ingredient[]) => {
        this.ingredients = ingreds;
      }
    );
  }

  ngOnDestroy() {
    this.subIngs.unsubscribe();
  }

  onEditItem(index: number) {
    this.slServ.startedEditing.next(index);
  }
}
