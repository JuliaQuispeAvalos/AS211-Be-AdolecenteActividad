import { Component, OnInit } from '@angular/core';
import { AttorneyService } from '../attorney.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attorney-list',
  templateUrl: './attorney-list.component.html',
  styleUrls: ['./attorney-list.component.css']
})
export class AttorneyListComponent implements OnInit {
  attorneys: any[] = [];
  filteredAttorneys: any[] = [];
  showEditForm = false;
  editedAttorney: any = {};
  filterByStatus: string = 'active';

  constructor(private attorneyService: AttorneyService, private router: Router) { }

  ngOnInit(): void {
    this.attorneyService.getAttorneyList().subscribe(data => {
      this.attorneys = data;
      this.filteredAttorneys = data;
    });
  }

  loadAttorneys(): void {
    if (this.filterByStatus === 'active') {
      this.attorneyService.getAttorneyList().subscribe(data => {
        this.attorneys = data;
        this.filteredAttorneys = data;
      });
    } else if (this.filterByStatus === 'inactive') {
      this.attorneyService.getInactiveAttorneyList().subscribe(data => { 
        this.attorneys = data;
        this.filteredAttorneys = data;
      });
    } else {
      this.attorneyService.getAttorneyList().subscribe(data => {
        this.attorneys = data;
        this.filteredAttorneys = data;
      });
    }
  }  

  openEditForm(attorney: any): void {
    this.editedAttorney = { ...attorney };
    this.showEditForm = true;
  }

  closeEditForm(): void {
    this.showEditForm = false;
    this.editedAttorney = {}; 
  }

  saveEditedAttorney(): void {
    this.attorneyService.updateAttorney(this.editedAttorney.id, this.editedAttorney).subscribe(() => {
      this.showEditForm = false;
      this.editedAttorney = {}; 
      this.attorneyService.getAttorneyList().subscribe(data => {
         this.attorneys = data;
       });
    });
  }

  deleteAttorney(id: number): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este Attorney?');
    if (confirmDelete) {
      this.attorneyService.deleteAttorney(id).subscribe(() => {
        this.attorneyService.getAttorneyList().subscribe(data => {
        this.attorneys = data;
        });
      });
    }
  }

  filterAttorneysByStatus(): void {
    if (this.filterByStatus === 'active') {
      this.filteredAttorneys = this.attorneys.filter(attorney => attorney.active === 'yes');
    } else if (this.filterByStatus === 'inactive') {
      this.filteredAttorneys = this.attorneys.filter(attorney => attorney.active === 'no');
    }
    this.loadAttorneys();
  } 
  

}


