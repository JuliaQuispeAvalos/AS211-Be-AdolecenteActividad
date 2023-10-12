import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { FuncionaryRoutingModule } from './funcionary-routing.module';
import { HomeFuncionaryPage } from '@soa/funcionary/pages';
import { FuncionaryListComponent } from './components/funcionary-list/funcionary-list.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FuncionaryFormComponent} from "@soa/funcionary/components/funcionary-form/funcionary-form.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [HomeFuncionaryPage, FuncionaryListComponent],
  imports: [CommonModule, FuncionaryRoutingModule, MatTableModule, MatIconModule, MatButtonModule],
})
export class FuncionaryModule {}
