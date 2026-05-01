import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Сказка о потерянном времени',
      price: 15.99,
      description: 'Увлекательная книга для детей о приключениях',
      imageUrl: 'https://via.placeholder.com/150',
      category: 'books'
    },
    {
      id: 2,
      name: 'Волшебная лампа',
      price: 25.50,
      description: 'Интерьерная лампа с эффектом свечения',
      imageUrl: 'https://via.placeholder.com/150',
      category: 'decor'
    },
    {
      id: 3,
      name: 'Набор наклеек "Звёздные истории"',
      price: 5.99,
      description: '50 ярких наклеек',
      imageUrl: 'https://via.placeholder.com/150',
      category: 'stickers'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
