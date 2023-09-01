import { Component } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  counter = [60, 44, 47, 30, 39, 40, 49, 33];
  activeDecrease = true;
  // Crea un array con los datos de un array existente
  initialCounter = [...this.counter];
  quantityBuy = 1;


  increase(index: number) {
    if (this.counter[index] >= 0) {
      this.counter[index] = this.counter[index] + this.initialCounter[index];

    }
  }

  decrease(index: number) {
    if (this.counter[index] > this.initialCounter[index]) {
      this.counter[index] = this.counter[index] - this.initialCounter[index];

    }
  }

  purchasedProducts: any[] = [];

  buyPizza(index: number) {
    const product = {
      precio: this.counter[index]
    };

    this.purchasedProducts.push(product);
  }


  calculateTotal() {
    let total = 0;
    for (const producto of this.purchasedProducts) {
      total += producto.precio;
    }
    return total;
  }

  modalVisible = false;
  openModal(){
    this.modalVisible = true
  }

  closeModal(){
    this.modalVisible = false;
  }
}

