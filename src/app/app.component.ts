import { Component } from '@angular/core';
import { testCards } from './card/cards/card';
import { IModel } from './models/model';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pagination';
  
  readonly ITEMS_PER_PAGE: number = 3;
  allCards: IModel[] = testCards;
  filteredCards: IModel[] = testCards;
  cards: IModel[] = this.allCards.slice(0, this.ITEMS_PER_PAGE);
  searchText!: string;
  filteredCardsLength: number = testCards.length;


  filter(text: string){
    this.filteredCards = this.allCards
      .filter(c => c.name.toLowerCase().includes(text.toLowerCase()) ||
                   c.username.toLowerCase().includes(text.toLowerCase()) ||
                   c.email.toLowerCase().includes(text.toLowerCase()) ||
                   c.address.city.toLowerCase().includes(text.toLowerCase()) ||
                   c.address.street.toLowerCase().includes(text.toLowerCase())
              );
    this.filteredCardsLength = this.filteredCards.length;
    this.cards = this.filteredCards.slice(0, this.ITEMS_PER_PAGE);
  }



  selectPage(pageIndex: number) {
    let start = (pageIndex - 1) * this.ITEMS_PER_PAGE;
    this.cards = this.filteredCards.slice(start, start + this.ITEMS_PER_PAGE);
  }


}
