import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { PlainSurveyComponent } from '../../pages/plain-survey/plain-survey.component';
import { DropzoneComponent } from '../../pages/dropzone/dropzone.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'plain-survey',      component: PlainSurveyComponent },
    { path: 'dropzone',      component: DropzoneComponent },

];
