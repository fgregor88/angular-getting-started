import {Component, Input} from "@angular/core";

@Component({
  selector: 'pm-price',
  templateUrl: 'price.component.html'
})
export class PriceComponent{
  @Input() price: number = 0;
  title: string = "some title";

  onClick() {
    console.log(`Cena je €${(this.price)}`);
  }
}
