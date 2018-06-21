import {
  Component,
  OnInit,
  EventEmitter,
  Output} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slServ: ShoppingListService) { }

  ngOnInit() {
  }

  onAddClick(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.ammount);
    this.slServ.addIngredient(newIngredient);
    form.reset();
  }

  onDelClick() {

  }

  onClrClick() {

  }

}
