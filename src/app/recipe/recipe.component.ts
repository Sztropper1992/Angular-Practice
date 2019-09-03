import { Recipe} from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent{

recipe : Recipe;

addRecipe(recipe : Recipe){
  this.recipe = recipe;
}

  constructor() { }



}
