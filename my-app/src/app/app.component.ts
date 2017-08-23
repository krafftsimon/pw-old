import { Component } from '@angular/core';
import { listAnimation } from './animations/list.animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [listAnimation]
})
export class AppComponent {
  projectsListActive: boolean = false;
  jobsListActive: boolean = false;
  skillsListActive: boolean = false;
  projects: string[] = ["proj1", "proj2", "proj3", "proj4"];
  jobs: string[] = ["job1", "job2"];
  skills: string[] = ["skill1", "skill2", "skill3", "skill4"];
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
