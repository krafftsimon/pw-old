import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { Project1Component } from './project1.component';
import { Project2Component } from './project2.component';
import { Project3Component } from './project3.component';
import { Project4Component } from './project4.component';
import { Project5Component } from './project5.component';
import { Project6Component } from './project6.component';
import { JobHistoryComponent } from './job-history.component';
import { SkillsComponent } from './skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'project1',  component: Project1Component },
  { path: 'project2',  component: Project2Component },
  { path: 'project3',  component: Project3Component },
  { path: 'project4',  component: Project4Component },
  { path: 'project5',  component: Project5Component },
  { path: 'project6',  component: Project6Component },
  { path: 'job-history',  component: JobHistoryComponent },
  { path: 'skills',  component: SkillsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
