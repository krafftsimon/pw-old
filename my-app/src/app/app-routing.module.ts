import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Project1Component } from './project1.component';
import { Project2Component } from './project2.component';
import { Project3Component } from './project3.component';
import { Project4Component } from './project4.component';
import { JobHistoryComponent } from './job-history.component';
import { SkillsComponent } from './skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/project1', pathMatch: 'full' },
  { path: 'project1',  component: Project1Component },
  { path: 'project2',  component: Project2Component },
  { path: 'project3',  component: Project3Component },
  { path: 'project4',  component: Project4Component },
  { path: 'job-history',  component: JobHistoryComponent },
  { path: 'skills',  component: SkillsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
