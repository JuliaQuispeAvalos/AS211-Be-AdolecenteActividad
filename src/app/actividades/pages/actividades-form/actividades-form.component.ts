import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import {ActividadesService} from "@soa/actividades/services/actividades.service";
import {Router} from "@angular/router";

function lettersOnlyValidator(control: AbstractControl): { [key: string]: any } | null {
  const isValid = /^[a-zA-Z\s]*$/.test(control.value);
  return isValid ? null : { 'lettersOnly': true };
}

// Validador de número de documento
function documentNumberValidator(documentTypeControl: AbstractControl): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const documentType = documentTypeControl.value;
    let validFormat = /^\d+$/;
    let validLength = false;

    if (documentType === 'DNI') {
      validLength = control.value.length === 8;
    } else {
      validLength = control.value.length === 11;
    }

    const isValid = validFormat.test(control.value) && validLength;
    return isValid ? null : { 'documentNumber': true };
  };
}

// Validador de número de teléfono
function phoneNumberValidator(control: AbstractControl): { [key: string]: any } | null {
  const isValid = /^\d{9}$/.test(control.value);
  return isValid ? null : { 'phoneNumber': true };
}

@Component({
  selector: 'app-teenager-form',
  templateUrl: './actividades-form.component.html',
  styleUrls: ['./actividades-form.component.scss']
})
export class ActividadesFormComponent implements OnInit, OnDestroy {
  activitiesForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder, public activitiesService: ActividadesService, private router: Router) {
  }

  ngOnInit(): void {
    this.initActivitiesForm();
  }


  initActivitiesForm() {
    this.activitiesForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required, lettersOnlyValidator]],
      description: [null, [Validators.required, lettersOnlyValidator]],
      date: [null, [Validators.required, lettersOnlyValidator]],
      duration: [null, Validators.required],
      location: [null, Validators.required],
      active: ['A'],
      type_pronacej: [null, Validators.required],
      type_soa: [null, Validators.required],
    });

    // Agregar dinámicamente el validador a document_number según el valor de document_type
    const documentNumberControl = this.activitiesForm.get('document_number');
    const documentTypeControl = this.activitiesForm.get('document_type');
    if (documentNumberControl && documentTypeControl) {
      documentTypeControl.valueChanges.subscribe((documentType) => {
        if (documentType === 'DNI') {
          documentNumberControl.setValidators([Validators.required, documentNumberValidator(documentNumberControl)]);
        } else {
          documentNumberControl.setValidators([Validators.required, documentNumberValidator(documentNumberControl)]);
        }
        documentNumberControl.updateValueAndValidity();
      });
    }

    if (this.activitiesService.actividadesSelected) {
      this.activitiesForm.patchValue(this.activitiesService.actividadesSelected);
    }
  }


  saveActivities() {
    if (this.activitiesService.actividadesSelected) {
      this.updateActivities();
    } else {
      this.registrarActivities();
    }
  }

  registrarActivities() {
    console.log('Datos de la Actividad:', this.activitiesForm.value)
    this.activitiesService.save(this.activitiesForm.value).subscribe(res => {
      console.log('RESULTADO', res);
    })
    this.activitiesForm.reset();
    this.navigateList();
  }

  updateActivities() {
    console.log('Datos de la Actividad:', this.activitiesForm.value)
    this.activitiesService.update(this.activitiesForm.value).subscribe(res => {
      console.log('ACTUALIZACIÓN', res);
    })
    this.activitiesForm.reset();
    this.navigateList();
  }


  ngOnDestroy() {
    this.activitiesService.actividadesSelected = undefined;
  }

  navigateList() {
    this.router.navigate(['/actividades']);
  }
}
