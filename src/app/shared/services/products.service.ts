import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpClient  = inject(HttpClient)

  getAllProducts(){
   return this.httpClient.get<Product[]>('/api/products');
  }
  getProductsById(id: string){
    return this.httpClient.get<Product>(`/api/products/${id}`);
   }
  postProduct(payload: ProductPayload){
    return this.httpClient.post('/api/products', payload);
   }
   putProduct(id: string, payload: ProductPayload){
    return this.httpClient.put(`/api/products/${id}`, payload);
   }
   deleteProduct(id: string) {
    return this.httpClient.delete(`/api/products/${id}`);
   }
}
