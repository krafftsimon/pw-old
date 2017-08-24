import { Component } from '@angular/core';
import { listAnimation } from './animations/list.animation'
import { Submenu } from './submenu';
import { routerTransitionAnimation } from './animations/router-transition.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [listAnimation, routerTransitionAnimation]
})
export class AppComponent {
  projectsListActive: boolean = false;
  jobsListActive: boolean = false;
  skillsListActive: boolean = false;
  projects: Submenu[] = [{name: "proj1", link: "/project1"}, {name: "proj2", link: "/project2"}, {name: "proj3", link: "/project3"}, {name: "proj4", link: "/project4"}];
  jobs: Submenu[] = [{name: "job1", link: "/job1"}, {name: "job2", link: "/job2"}, {name: "job3", link: "/job3"}, {name: "job4", link: "/job4"}];
  skills: Submenu[] = [{name: "skill1", link: "/skill1"}, {name: "skill2", link: "/skill2"}, {name: "skill3", link: "/skill3"}, {name: "skill4", link: "/skill4"}];
  selectedItem: string;

  toggleProjectsList(): void {
    this.projectsListActive = !this.projectsListActive;
  }

  toggleJobsList(): void {
    this.jobsListActive = !this.jobsListActive;
  }

  toggleSkillsList(): void {
    this.skillsListActive = !this.skillsListActive;
  }

  onSelect(item: string): void {
    this.selectedItem = item;
  }
}
