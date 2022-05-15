import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtherLayoutRoutes } from './other-layout.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SurveyComponent } from '../../pages/survey/survey.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OtherLayoutRoutes),
    FormsModule,
    ReactiveFormsModule, // to know that [formGroup] is a part angular forms
    NgbModule
  ],
  declarations: [
    SurveyComponent
  ]
})
export class OtherLayoutModule { }
