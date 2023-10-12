import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TeenagerService} from "@soa/teenager/services/teenager.service";
import {Adolescente} from "@soa/teenager/pages/models/adolescente.model";
import {AdolescenteModalService} from "@soa/teenager/services/adolescente-modal.service";
import {AdolescenteModalComponent} from "@soa/teenager/pages/adolescente-modal/adolescente-modal.component";
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home-teenager',
  templateUrl: './home-teenager.component.html',
  styleUrls: ['./home-teenager.component.scss']
})
export class HomeTeenagerComponent implements OnInit {
  adolescentes: any[]=[];
  filtroActivo: string = "activos";
  constructor(private funcionaryService: TeenagerService, private router:Router,private dialog: MatDialog) {}

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

  editarAdolescente(adolescente:Adolescente){
    this.funcionaryService.adolescenteSelected=adolescente;
    this.navigateForm();
  }

  navigateForm(){
    this.router.navigate(['/adolescente/form']);
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
    const dialogRef = this.dialog.open(AdolescenteModalComponent, {
      width: '70%', // Ancho del modal (ajusta según tus necesidades)
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Modal cerrado:', result);
      // Realiza cualquier acción necesaria después de cerrar el modal.
    });
  }
}
