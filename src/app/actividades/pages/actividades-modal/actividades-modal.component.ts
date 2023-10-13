import { Component } from '@angular/core';
import {AdolescenteModalService} from "@soa/teenager/services/adolescente-modal.service";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {ActividadesModalService} from "@soa/actividades/services/actividades-modal.service";
import {ActividadesService} from "@soa/actividades/services/actividades.service";

@Component({
  selector: 'app-adolescente-modal',
  templateUrl: './actividades-modal.component.html',
  styleUrls: ['./actividades-modal.component.scss']
})
export class ActividadesModalComponent {
  private isOpen = new BehaviorSubject<boolean>(false);
  constructor(private modalService: ActividadesModalService,private router: Router, public actividadesService: ActividadesService) {}

  openModal() {
    this.modalService.openModal();
  }
  navigateList() {
    this.isOpen.next(false);
  }
  closeModal() {
    this.isOpen.next(false);
  }
}
