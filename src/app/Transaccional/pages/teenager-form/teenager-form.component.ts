import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import {TeenagerService} from "@soa/teenager/services/teenager.service";
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
  templateUrl: './teenager-form.component.html',
  styleUrls: ['./teenager-form.component.scss']
})
export class TeenagerFormComponent implements OnInit, OnDestroy {
  adolescenteForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder, public adolescenteService: TeenagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.initAdolescenteForm();
  }


  initAdolescenteForm() {
    this.adolescenteForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required, lettersOnlyValidator]],
      father_last_name: [null, [Validators.required, lettersOnlyValidator]],
      mother_last_name: [null, [Validators.required, lettersOnlyValidator]],
      document_type: [null, Validators.required],
      document_number: [null, Validators.required],
      cellphone: [null, [Validators.required, phoneNumberValidator]],
      address: [null, Validators.required],
      active: ['A'],
      birthday: [null, Validators.required],
      type_attorney: [null, Validators.required],
    });

    // Agregar dinámicamente el validador a document_number según el valor de document_type
    const documentNumberControl = this.adolescenteForm.get('document_number');
    const documentTypeControl = this.adolescenteForm.get('document_type');
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

    if (this.adolescenteService.adolescenteSelected) {
      this.adolescenteForm.patchValue(this.adolescenteService.adolescenteSelected);
    }
  }


  saveAdolescente() {
    if (this.adolescenteService.adolescenteSelected) {
      this.updateAdolescente();
    } else {
      this.registrarAdolescente();
    }
  }

  registrarAdolescente() {
    console.log('Dastos del Adolescente:', this.adolescenteForm.value)
    this.adolescenteService.save(this.adolescenteForm.value).subscribe(res => {
      console.log('RESULTADO', res);
    })
    this.adolescenteForm.reset();
    this.navigateList();
  }

  updateAdolescente() {
    console.log('Dastos del Adolescente:', this.adolescenteForm.value)
    this.adolescenteService.update(this.adolescenteForm.value).subscribe(res => {
      console.log('ACTUALIZACIÓN', res);
    })
    this.adolescenteForm.reset();
    this.navigateList();
  }


  ngOnDestroy() {
    this.adolescenteService.adolescenteSelected = undefined;
  }

  navigateList() {
    this.router.navigate(['/adolescente']);
  }
}
