import { Component } from '@angular/core';
import {AdolescenteModalService} from "@soa/teenager/services/adolescente-modal.service";

@Component({
  selector: 'app-adolescente-modal',
  templateUrl: './transaccional-modal.component.html',
  styleUrls: ['./transaccional-modal.component.scss']
})
export class TransaccionalModalComponent {
  constructor(private modalService: AdolescenteModalService) {}

  openModal() {
    this.modalService.openModal();
  }

}
