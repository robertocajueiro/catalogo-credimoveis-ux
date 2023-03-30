import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListProductComponent } from './components/list-product/list-product.component';
import { FormProductComponent } from './components/form-product/form-product.component';

const routes: Routes = [
  { path: '', component: ListProductComponent },
  { path: 'cadastro-produto', component: FormProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
