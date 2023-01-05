import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import {Router } from '@angular/router';
import { Login, SignUp } from '../data-type';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  /**
   *
   */
  constructor(private seller: SellerService,private router:Router) {}
ngOnInit():void{
  this.seller.reLoadSeller()
}

  signUp(data:SignUp): void {
    this.seller.usersignup(data);
    }
  Login(data:Login):void{
    console.warn(data)
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
        if(isError)
        {
this.authError='User Name Or Password Is Not Valid';
        }
        else{

        }
    });
  }


    shownview=false;
  authError:string='';
    openLogin(){
      this.shownview=true
     }
     openSignup(){
      this.shownview=false
     }
}
