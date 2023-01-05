import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
constructor(private product:ProductService){}
productList:undefined|product[]
ProductMessage:undefined|string;
iconTrash=faTrash;
iconEdit=faEdit;
ngOnInit():void{
this.list();
}
ProductDelete(id:number){
  this.product.ProductDelete(id).subscribe((result)=>{
    if(result){
      this.ProductMessage=` Item Delete Successfully`;
      this.list();
    }
  });
  setTimeout(() => {
    this.ProductMessage=undefined;
  }, 3000);
}
list()
{
  this.product.addproductlist().subscribe((result)=>{
    this.productList=result;
      });
}


}
