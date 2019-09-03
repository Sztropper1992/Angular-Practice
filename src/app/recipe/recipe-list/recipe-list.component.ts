import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from "../recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes= [new Recipe("Brownie", "This is delicous!!!", "https://www.seriouseats.com/2018/03/20180413-brownie-mix-vicky-wasik-20-1500x1125.jpg"),
  new Recipe("Apple Pie", "I looove apple pie!!!", "https://images-gmi-pmc.edge-generalmills.com/75593ed5-420b-4782-8eae-56bdfbc2586b.jpg") ]

  @Output() recipeClicked = new EventEmitter<Recipe>();

  recipeEmitter(recipe : Recipe){
      this.recipeClicked.emit(recipe);
      
  }


  constructor() { }

  ngOnInit() {
  }

}
