import { Component } from '@angular/core';
import { AttorneyService } from '../attorney.service';

@Component({
  selector: 'app-attorney-form',
  templateUrl: './attorney-form.component.html',
  styleUrls: ['./attorney-form.component.css']
})
export class AttorneyFormComponent {
  newAttorney: any = {};

  constructor(private attorneyService: AttorneyService) { }

  submitForm() {
    this.attorneyService.saveAttorney(this.newAttorney).subscribe(() => {
      this.newAttorney = {};
      alert('Attorney registrado exitosamente.');
    });
  }
}
