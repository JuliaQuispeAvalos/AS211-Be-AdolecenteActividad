
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActividadesService } from '../../teen-principal/services/actividades.service';
import { AdolescenteService } from '../services/adolescente.service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-transaccional-modal',
  templateUrl: './transaccional-modal.component.html',
  styleUrls: ['./transaccional-modal.component.scss']
})
export class TransaccionalModalComponent implements OnInit {
  data: any = [];
  adolescentes: any[] = [];
  actividades: any[] = [];
  selectAll: boolean = false;
  transaccionalForm: FormGroup = new FormGroup({});
  selectedActividadId: string | undefined;
  constructor(
    private _formBuilder: FormBuilder,
    private fb: FormBuilder,
    private router: Router,
    private actividadesService: ActividadesService,
    private adolescenteService: AdolescenteService,
    private transaccionalService: ServiceService
  ) {}

  ngOnInit() {
    this.findAllActividades();
    this.findAllAdolescente();
    this.initActividadesForm();
  }

  findAllActividades() {
    this.actividadesService.findAll().subscribe((res: any) => {
      console.log(res);
      this.actividades = res.map((actividades: any) => ({
        ...actividades,
        checked: false
      }));
    });
  }

  findAllAdolescente() {
    this.adolescenteService.findAll().subscribe((res: any) => {
      console.log(res);
      this.adolescentes = res.map((adolescentes: any) => ({
        ...adolescentes,
        checked: false
      }));
    });
  }

  toggleSelectAll() {
    this.selectAll = !this.selectAll;

    // Toggle the checked state of all activities
    if (!this.selectAll) {
      this.actividades.forEach((actividad) => {
        actividad.checked = false;
      });
    }
  }

  toggleSelectAllAdolescente() {
    this.selectAll = !this.selectAll;

    // Toggle the checked state of all adolescents
    this.adolescentes.forEach((adolescente) => {
      adolescente.checked = this.selectAll;
    });
  }

  handleCheckboxChange(id: string) {
    // Obtain the form control related to id_teenager
    const idTeenagerControl = this.transaccionalForm.get('id_teenager');

    // Check if the checkbox is already selected
    if (idTeenagerControl && idTeenagerControl.value === id) {
      // Deselect the checkbox
      idTeenagerControl?.setValue(null);
      return; // Prevent further processing
    }

    // Select the checkbox
    idTeenagerControl?.setValue(id);
  }

  handleCheckboxChangeActividad(id: string) {
    // Obtén el control del formulario relacionado con id_activities
    const idActivitiesControl = this.transaccionalForm.get('id_activities');

    // Verifica si el botón de seleccionar todo está marcado
    if (!this.selectAll) {
      // Actualiza el valor del form control
      idActivitiesControl?.setValue(id);

      // Obtén el id del registro seleccionado
      this.selectedActividadId = id;
    }
  }

  initActividadesForm() {
    this.transaccionalForm = this.fb.group({
      start_date: ['2023-10-05'],
      participation_status: ['Completada'],
      active: ['A'],
      id_activities: [''],
      duration: '',
      notes: '',
      id_teenager: [''],
    });
    // Desmarca todas las casillas de verificación de actividades
    this.actividades.forEach((actividad) => {
      actividad.checked = false;});
    if (this.transaccionalService.transaccionalSelected) {
      this.transaccionalForm.patchValue(this.transaccionalService.transaccionalSelected);
    }
  }

  saveActividades() {
    if (this.actividadesService.actividadesSelected) {
      // Lógica para actualizar actividades si es necesario
    } else {
      this.createActividades();

    }
  }

  createActividades() {
    console.log('Datos Actividades:', this.transaccionalForm.value);
    this.transaccionalService.save(this.transaccionalForm.value).subscribe(res => {
      console.log('Se guardó correctamente:', res);
      this.transaccionalForm.reset();
      // Puedes redirigir al usuario o realizar otras acciones después de guardar los datos
    });
  }

}
