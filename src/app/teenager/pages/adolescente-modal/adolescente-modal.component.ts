import { Component } from '@angular/core';
import {AdolescenteModalService} from "@soa/teenager/services/adolescente-modal.service";

@Component({
  selector: 'app-adolescente-modal',
  templateUrl: './adolescente-modal.component.html',
  styleUrls: ['./adolescente-modal.component.scss']
})
export class AdolescenteModalComponent {
  constructor(private modalService: AdolescenteModalService) {}

  openModal() {
    this.modalService.openModal();
  }

}
