import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  counter = 40;
  activeDecrease = true;

  increase() {
    if (this.counter >= 0) {
      this.counter = this.counter + 40;
    }
  }

  decrease() {
    if (this.counter > 40) {
      this.counter = this.counter - 40;
    }
  }

}

