import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFuncionaryPage } from '@soa/funcionary/pages';
import {FuncionaryFormComponent} from "@soa/funcionary/components/funcionary-form/funcionary-form.component";

const routes: Routes = [
  {
    path: '',
    component: HomeFuncionaryPage
  },
  {
    path: 'form',
    component: FuncionaryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionaryRoutingModule { }
