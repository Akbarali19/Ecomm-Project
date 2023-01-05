import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private router: Router) {}
  addProduct(data: product) {
    return this.http
      .post('http://localhost:3000/products', data, { observe: 'response' })
      .subscribe((result) => {
        localStorage.setItem('product', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      });
  }
  addproductlist()
  {
    return this.http
    .get<product[]>('http://localhost:3000/products');
  }
  ProductDelete(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`);

  }



getProduct(id:string){
  return this.http.get<product>(`http://localhost:3000/products/${id}`);
}
updateProduct(product:product){
  return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product,{ observe: 'response' });
  }
  popularProducts(){
    return this.http
    .get<product[]>('http://localhost:3000/products?_limit=3');

  }
}
