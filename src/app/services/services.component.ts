import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  public CardType: string = 'audit';

  changeTile(cardType: string) {
    this.CardType = cardType;
  }
}
