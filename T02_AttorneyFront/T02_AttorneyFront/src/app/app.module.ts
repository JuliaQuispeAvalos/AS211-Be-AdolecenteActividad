import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AttorneyListComponent } from './attorney-list/attorney-list.component';
import { AttorneyFormComponent } from './attorney-form/attorney-form.component';
import { AttorneyService } from './attorney.service';


const routes: Routes = [
  { path: 'attorney-list', component: AttorneyListComponent },
  { path: 'attorney-form', component: AttorneyFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AttorneyListComponent,
    AttorneyFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AttorneyService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
