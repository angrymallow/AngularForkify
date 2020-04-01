import { Component, OnInit } from '@angular/core';
import { RecipeServices } from '../recipe.services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
  
})
export class SearchResultComponent implements OnInit {

  public recipes = [];
  public selectedRecipeId: number;

  constructor(private recipeServices: RecipeServices) {
    recipeServices.onRecipeSelected.subscribe((id: number)=> {
      this.selectedRecipeId = id;
    });
   }

  ngOnInit(): void {
      this.recipes = this.recipeServices.getRecipes();
  }

}