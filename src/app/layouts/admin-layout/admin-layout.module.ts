import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { PlainSurveyComponent } from '../../pages/plain-survey/plain-survey.component';
import { DropzoneComponent } from '../../pages/dropzone/dropzone.component';


import { NgxDropzoneModule } from 'ngx-dropzone';




  
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgApexchartsModule} from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    NgApexchartsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgxDropzoneModule,
    ReactiveFormsModule // to know that [formGroup] is a part angular forms
  ],
  declarations: [
    DashboardComponent,
    TablesComponent,
    PlainSurveyComponent,
    DropzoneComponent
  ]
})

export class AdminLayoutModule {}
