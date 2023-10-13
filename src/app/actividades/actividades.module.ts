import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadesRoutingModule } from './actividades-routing.module';
import { HomeActividadesComponent } from '@soa/actividades/pages/home-actividades/home-actividades.component';
import { ActividadesFormComponent } from '@soa/actividades/pages/actividades-form/actividades-form.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ActividadesModalComponent } from '@soa/actividades/pages/actividades-modal/actividades-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    HomeActividadesComponent,
    ActividadesFormComponent,
    ActividadesModalComponent
  ],
  imports: [
    CommonModule,
    ActividadesRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatMenuModule
  ]
})
export class ActividadesModule { }
