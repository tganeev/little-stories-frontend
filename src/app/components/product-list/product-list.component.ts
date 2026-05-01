import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-grid">
      <div *ngFor="let product of products" class="product-card">
        <img [src]="product.imageUrl" [alt]="product.name">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p class="price">{{ product.price }} ₽</p>
        <button (click)="addToCart(product)">В корзину</button>
      </div>
    </div>
  `,
  styles: [`
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    .product-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 15px;
      text-align: center;
    }
    .product-card img {
      max-width: 100%;
      height: auto;
    }
    .price {
      font-size: 1.2em;
      color: #4a90e2;
      font-weight: bold;
    }
    button {
      background-color: #4a90e2;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #357abd;
    }
  `]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    console.log('Added to cart:', product);
    alert(`Товар "${product.name}" добавлен в корзину!`);
  }
}
