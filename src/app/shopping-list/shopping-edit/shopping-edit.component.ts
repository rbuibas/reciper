import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slServ: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slServ.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.slServ.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            ammount: this.editedItem.ammount
          });
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.ammount);
    if (this.editMode) {
      this.slServ.updateIngredient(this.editedItemIndex, newIngredient);
      this.editMode = false;
    } else {
      this.slServ.addIngredient(newIngredient);
    }
    form.reset();
  }

  onDelClick() {

  }

  onClrClick() {
    this.slForm.reset();
    this.editMode = false;
  }

}
