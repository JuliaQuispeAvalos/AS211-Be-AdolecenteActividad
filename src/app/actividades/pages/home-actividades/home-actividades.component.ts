import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AdolescenteModalService} from "@soa/teenager/services/adolescente-modal.service";
import { MatDialog } from '@angular/material/dialog';
import {ActividadesModalComponent} from "@soa/actividades/pages/actividades-modal/actividades-modal.component";
import {ActividadesService} from "@soa/actividades/services/actividades.service";
import {Actividades} from "@soa/actividades/pages/models/actividades.model";


@Component({
  selector: 'app-home-teenager',
  templateUrl: './home-actividades.component.html',
  styleUrls: ['./home-actividades.component.scss']
})
export class HomeActividadesComponent implements OnInit {
  actividades: any[]=[];
  filtroActivo: string = "activos";
  constructor(private actividadesService: ActividadesService, private router:Router,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.filtrarPorEstado();

  }

  findAll() {
    this.actividadesService
      .findAll()
      .subscribe((res:any) => {
        console.log(res);
        this.actividades=res;
      });
  }

  editarActividades(activities:Actividades){
    this.actividadesService.actividadesSelected=activities;
    this.openModal();
  }

  navigateForm(){
    this.router.navigate(['/actividades/form']);
  }
  deleteActividades(id:string){
    this.actividadesService.delete(id).subscribe(res => {
      console.log('Se elimino correctamente:',res)
    })
    this.findAll();
  }
  filtrarPorEstado() {
    if (this.filtroActivo === 'activos') {
      this.actividadesService.findAll().subscribe((res: any) => {
        console.log(res);
        this.actividades = res;
      });
    } else if (this.filtroActivo === 'inactivos') {
      this.actividadesService.findInactive().subscribe((res: any) => {
        console.log(res);
        this.actividades = res;
      });
    }
  }
  reactivarActividades(id: string) {
    this.actividadesService.activate(id).subscribe(() => {
      this.findAll();
    });
  }
  openModal(): void {
    const dialogRef = this.dialog.open(ActividadesModalComponent, {
      width: '70%', // Ancho del modal (ajusta según tus necesidades)
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Modal cerrado:', result);
      // Realiza cualquier acción necesaria después de cerrar el modal.
    });
  }
}
