import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
  
})
export class RecipeListComponent implements OnInit {

  @Input() public recipes;
  @Input() public selectedRecipeId: string;

  constructor() {
   }

  ngOnInit(): void {
  }



}
