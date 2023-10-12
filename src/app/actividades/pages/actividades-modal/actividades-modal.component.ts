import { Component } from '@angular/core';
import {AdolescenteModalService} from "@soa/teenager/services/adolescente-modal.service";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-adolescente-modal',
  templateUrl: './actividades-modal.component.html',
  styleUrls: ['./actividades-modal.component.scss']
})
export class ActividadesModalComponent {
  private isOpen = new BehaviorSubject<boolean>(false);
  constructor(private modalService: AdolescenteModalService,private router: Router) {}

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
