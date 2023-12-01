import {Component, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import {TransaccionalModalComponent} from "./transaccional-modal/transaccional-modal.component";
import {ServiceService} from "./services/service.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Transaccional} from "./models/transaccional.model";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-expansion',
  standalone: true,
  imports: [
    DemoFlexyModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss'],
})
export class ExpansionComponent implements OnInit {
  transaccional: any[]=[];
  filtroActivo: string = "activos";
  constructor(private funcionaryService: ServiceService, private router:Router,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.filtrarPorEstado();

  }

  findAll() {
    this.funcionaryService
      .findAll()
      .subscribe((res:any) => {
        console.log(res);
        this.transaccional=res;
      });
  }

  editarAdolescente(adolescente:Transaccional){
    this.funcionaryService.transaccionalSelected=adolescente;
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
        this.transaccional = res;
      });
    } else if (this.filtroActivo === 'inactivos') {
      this.funcionaryService.findInactive().subscribe((res: any) => {
        console.log(res);
        this.transaccional = res;
      });
    }
  }
  reactivarAdolescente(id: string) {
    this.funcionaryService.activate(id).subscribe(() => {
      this.findAll();
    });
  }
  openModal(): void {
    const dialogRef = this.dialog.open(TransaccionalModalComponent, {
      width: '120%', // Ancho del modal (ajusta según tus necesidades)
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Modal cerrado:', result);
      // Realiza cualquier acción necesaria después de cerrar el modal.
    });
  }
}
