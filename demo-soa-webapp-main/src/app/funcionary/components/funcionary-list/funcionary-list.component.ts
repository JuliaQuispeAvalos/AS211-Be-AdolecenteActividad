import { Component, OnInit } from '@angular/core';
import { Funcionary } from '@soa/funcionary/model/funcionary.model';
import { FuncionaryService } from '@soa/funcionary/services/funcionary.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-funcionary-list',
  templateUrl: './funcionary-list.component.html',
  styleUrls: ['./funcionary-list.component.scss'],
})
export class FuncionaryListComponent implements OnInit {
adolescentes: any[]=[];
  constructor(private funcionaryService: FuncionaryService, private router:Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.funcionaryService
      .findAll()
      .subscribe((res:any) => {
        console.log(res);
        this.adolescentes=res;
      });
  }

  navigateForm(){
    this.router.navigate(['form']);
  }
}
