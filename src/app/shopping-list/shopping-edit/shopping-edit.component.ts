import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../../ingredients-model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild("itemInput", {static : false}) itemInput;
@ViewChild("amountInput", {static : false}) amountInput;
ingredient : Ingredient;
@Output()onAdded = new EventEmitter<Ingredient>();

onAdd(){
  this.ingredient = new Ingredient(this.itemInput.nativeElement.value, this.amountInput.nativeElement.value);
  this.onAdded.emit(this.ingredient);
}

  constructor() { }

  ngOnInit() {
  }

}
