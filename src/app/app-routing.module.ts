import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpdateComponent } from './seller-update/seller-update.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'Seller-auth',
    component:SellerAuthComponent,
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
    canActivate:[AuthGuard]
  },{
    path:'seller-Add-Product',
    component:SellerAddProductComponent,
    canActivate:[AuthGuard]
  },{
    path:'seller-update/:id',
    component:SellerUpdateComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
