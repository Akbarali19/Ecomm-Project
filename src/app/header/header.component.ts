import { JSDocComment } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor (private route:Router){}

menuType:string='Default';
sellerName:string='';
ngOnInit():void{
this.route.events.subscribe((val:any)=>{
  if(val.url)
{
if(localStorage.getItem('seller')&&val.url.includes('seller'))
  {
    console.warn("Inside Seller");
    this.menuType='Seller';
  if(localStorage.getItem('seller'))
  {
    let sellerStore=localStorage.getItem('seller');
    let sellerData=sellerStore && JSON.parse(sellerStore)[0];
    this.sellerName=sellerData.Name;

  }
  }
  else{
    console.warn("Outside Seller");
    this.menuType='Default';
  }

}
});
}

logOut(){
  localStorage.removeItem('seller');
  this.route.navigate(['/']);
}

}
