import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  loading = true;
  products: ProductInterface[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http
      .get(
        'https://xurreria-35a45-default-rtdb.firebaseio.com/products_idx.json'
      )
      .subscribe((resp: any) => {
        this.products = resp;
        setTimeout(() => {
          this.loading = false;
        }, 350);
      });
  }

  public getProduct(id: string) {
    return this.http.get(
      `https://xurreria-35a45-default-rtdb.firebaseio.com/products/${id}.json`
    );
  }
}
