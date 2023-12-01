import { Component, OnInit } from '@angular/core';
import { TeenService } from '../component-funcionality/services/teen/teen.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FuncionaryService } from '../component-funcionality/services/funcionary/funcionary.service';
import { Asignation } from '../component-funcionality/models/asignation/asignation.model';
import { AsignationService } from '../component-funcionality/services/asignation/asignation.service';
import { MatDialog } from '@angular/material/dialog';
import {Actividades} from './models/actividades.model';
import {ActividadesService} from "./services/actividades.service";
import {Router} from "@angular/router";
import {ActividadesFormComponent} from "./actividades-form/actividades-form.component";

@Component({
  selector: 'app-teen-principal',
  templateUrl: './teen-principal.component.html',
  styleUrls: ['./teen-principal.component.scss'],
})
export class TeenPrincipalComponent implements OnInit {
  adolescentes: any[]=[];
  filtroActivo: string = "activos";
  constructor(private funcionaryService: ActividadesService, private router:Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.filtrarPorEstado();

  }

  findAll() {
    this.funcionaryService
      .findAll()
      .subscribe((res:any) => {
        console.log(res);
        this.adolescentes=res;
      });
  }

  editarAdolescente(actividades: Actividades){
    this.funcionaryService.actividadesSelected=actividades;
    this.navigateForm();
  }


  deleteAdolescente(id:string){
    this.funcionaryService.delete(id).subscribe(res => {
      console.log('Se elimino correctamente:',res)
    })
    this.findAll();
  }
  filtrarPorEstado() {
    if (this.filtroActivo === 'activos') {
      this.funcionaryService.findAll().subscribe((res: any) => {
        console.log(res);
        this.adolescentes = res;
      });
    } else if (this.filtroActivo === 'inactivos') {
      this.funcionaryService.findInactive().subscribe((res: any) => {
        console.log(res);
        this.adolescentes = res;
      });
    }
  }
  reactivarAdolescente(id: string) {
    this.funcionaryService.activate(id).subscribe(() => {
      this.findAll();
    });
  }
  openModal(): void {
    const dialogRef = this.dialog.open(ActividadesFormComponent, {
      width: '70%', // Ancho del modal (ajusta según tus necesidades)
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Modal cerrado:', result);
      // Realiza cualquier acción necesaria después de cerrar el modal.
    });
  }
  navigateForm() {
    this.router.navigate(['/actividades-form']);
  }
}
