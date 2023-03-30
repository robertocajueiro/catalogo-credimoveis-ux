import { Component } from '@angular/core';
import { Product } from 'src/app/Product';
import { ListProductsService } from 'src/app/services/list-product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent {
  products: Product[] = [];

  constructor(private listService: ListProductsService) {
    this.getProducts();
  }

  getProducts(): void {
    this.listService.getAll().subscribe((data) => {
      this.products = data;
    });
  }
}
