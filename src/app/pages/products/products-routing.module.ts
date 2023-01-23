import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsService} from "../../core/services";

const routes: Routes = [
  {
    path: '',
    component: ProductsService
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
