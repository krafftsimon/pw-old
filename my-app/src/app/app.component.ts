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
  projects: Submenu[] = [{name: "Web App", link: "/project1"}, {name: "Java Mini Game", link: "/project2"}, {name: "Pipelined Processor", link: "/project3"}, {name: "RFID tag", link: "/project4"}];
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
