import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeActividadesComponent } from '@soa/actividades/pages/home-actividades/home-actividades.component';
import {TeenagerFormComponent} from "@soa/teenager/pages/teenager-form/teenager-form.component";
import {AdolescenteModalComponent} from "@soa/teenager/pages/adolescente-modal/adolescente-modal.component";

const routes: Routes = [
  {
    path: '',
    component: HomeActividadesComponent
  },
  {
    path: 'form',
    component: TeenagerFormComponent
  },{
    path: 'actividades',
    component: HomeActividadesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadesRoutingModule { }
