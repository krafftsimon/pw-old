import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { Project3Component } from './project3/project3.component';
import { Project4Component } from './project4/project4.component';
import { Project5Component } from './project5/project5.component';
import { Project6Component } from './project6/project6.component';
import { Project7Component } from './project7/project7.component';
import { JobHistoryComponent } from './timeline/job-history.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'project1',  component: Project1Component },
  { path: 'project2',  component: Project2Component },
  { path: 'project3',  component: Project3Component },
  { path: 'project4',  component: Project4Component },
  { path: 'project5',  component: Project5Component },
  { path: 'project6',  component: Project6Component },
  { path: 'project7',  component: Project7Component },
  { path: 'job-history',  component: JobHistoryComponent },
  { path: 'skills',  component: SkillsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
