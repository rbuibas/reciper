import { 
  Component, 
  OnInit, 
  ElementRef, 
  ViewChild,
  EventEmitter, 
  Output} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('ammountInput') ammountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddClick() {
    const tempName = this.nameInputRef.nativeElement.value;
    const tempAmmount = this.ammountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(tempName, tempAmmount);
    this.ingredientAdded.emit(newIngredient);
  }

  onDelClick() {

  }

  onClrClick() {

  }

}
