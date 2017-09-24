import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  @Input() items = [];
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';

  onAddItem() {
    this.itemAdded.emit(this.newItem);
  }
}
