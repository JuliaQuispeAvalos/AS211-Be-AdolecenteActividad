import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdolescenteModalService {
  private isOpen = new BehaviorSubject<boolean>(false);

  isOpen$ = this.isOpen.asObservable();

  openModal() {
    this.isOpen.next(true);
  }

  closeModal() {
    this.isOpen.next(false);
  }
}
