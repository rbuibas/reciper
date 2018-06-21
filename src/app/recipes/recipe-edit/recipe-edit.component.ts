import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
      private route: ActivatedRoute,
      private recSrv: RecipeService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null; // if we are in edit mode, the ID is present, otherwise not
          this.initForm();
        }
      );
  }

  private initForm() {
    let recipeName = '';
    let imagePath = '';
    let description = '';
    if (this.editMode) {
      const recipe = this.recSrv.getRecipe(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(imagePath),
      'desc': new FormControl(description),
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

}
