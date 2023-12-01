import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ActividadesService} from "../services/actividades.service";

@Component({
  selector: 'app-actividades-form',
  templateUrl: './actividades-form.component.html',
  styleUrls: ['./actividades-form.component.scss']
})
export class ActividadesFormComponent implements OnInit,OnDestroy{
  private isOpen = new BehaviorSubject<boolean>(false);
  actividadesForm:FormGroup=new FormGroup({});
  constructor(private router: Router,private fb:FormBuilder,public actividadesService: ActividadesService) {}

  ngOnInit(){
    this.initActividadesForm();
  }

  initActividadesForm(){
    this.actividadesForm=this.fb.group({
      id:[null],
      name:[''],
      description:[''],
      date:[''],
      duration:[''],
      location:[''],
      active:['A'],
      type_pronacej:[''],
      type_soa:['']
    });
    if(this.actividadesService.actividadesSelected){
      this.actividadesForm.patchValue(this.actividadesService.actividadesSelected);

    }
  }
  saveActividades(){
    if(this.actividadesService.actividadesSelected){
      this.editarActividades();
    }else{
      this.createActividades()
    }
  }
  createActividades(){
    console.log('Datos Actividades:', this.actividadesForm.value);
    this.actividadesService.save(this.actividadesForm.value).subscribe(res =>{
      console.log('Se guardó correctamente:', res);
      this.actividadesForm.reset();
    })
  }
  editarActividades(){
    console.log('Datos Actividades:', this.actividadesForm.value);
    this.actividadesService.update(this.actividadesForm.value).subscribe(res =>{
      console.log('Se actualizó correctamente:', res);
      this.actividadesForm.reset();
    })
  }
  ngOnDestroy() {
    this.actividadesService.actividadesSelected =undefined;
  }


  navigateList() {
    this.router.navigate(['/teen']);
  }
  closeModal() {
    this.isOpen.next(false);
  }
}
