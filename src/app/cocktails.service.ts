import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';
import { COCKTAILS } from './mock-cocktails';


@Injectable()
export class CocktailsService {

  getCocktails(): Cocktail[] {
    return COCKTAILS;
  }
  
}