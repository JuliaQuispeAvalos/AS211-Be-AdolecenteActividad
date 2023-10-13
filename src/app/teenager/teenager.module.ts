import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeenagerRoutingModule } from './teenager-routing.module';
import { HomeTeenagerComponent } from './pages/home-teenager/home-teenager.component';
import { TeenagerFormComponent } from './pages/teenager-form/teenager-form.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AdolescenteModalComponent } from './pages/adolescente-modal/adolescente-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    HomeTeenagerComponent,
    TeenagerFormComponent,
    AdolescenteModalComponent
  ],
  imports: [
    CommonModule,
    TeenagerRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatMenuModule
  ]
})
export class TeenagerModule { }
