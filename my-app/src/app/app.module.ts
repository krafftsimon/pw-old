import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import 'hammerjs';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Project1Component,
    Project2Component,
    Project3Component,
    Project4Component,
    Project5Component,
    Project6Component,
    Project7Component,
    JobHistoryComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
