import { Component, OnInit } from '@angular/core';
import { Cocktail } from './cocktail';
import { CocktailsService } from './cocktails.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CocktailsService]
})

export class AppComponent implements OnInit {

  constructor(private cocktialsService: CocktailsService) {}
  cocktails: Cocktail[];
  alcohols = [];
  selectedCocktails: Cocktail[];

  pushPrimaryAlcohols(alco) {
    if (this.alcohols.indexOf(alco) === -1) {
      this.alcohols.push(alco);
    }
  }

  getCocktails(): void {
    this.cocktails = this.cocktialsService.getCocktails();
    this.cocktails.forEach(item => {
      let priAlco = item.primaryAlcohol;
      if (priAlco instanceof Array) {
        priAlco.forEach(i => {this.pushPrimaryAlcohols(i)})
      } else {
        this.pushPrimaryAlcohols(item.primaryAlcohol);
      }

    });
    console.log(this.alcohols);
  }

  onSelectAlcohol(alcohol): void {
    this.selectedCocktails = [];
    this.cocktails.forEach(cocktail => {
      let priAlco = cocktail.primaryAlcohol;
      if (priAlco instanceof Array) {
        if (priAlco.indexOf(alcohol) > -1) {
          this.selectedCocktails.push(cocktail);
        }
      } else {
        if (priAlco === alcohol) {
          this.selectedCocktails.push(cocktail);
        }
      }
    });
  }

  ngOnInit(): void {
    this.getCocktails();
  }
}
