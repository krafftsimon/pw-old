import { Component } from '@angular/core';
import { listAnimation } from './animations/list.animation'
import { Submenu } from './submenu';
import { routerTransitionAnimation } from './animations/router-transition.animation';
import { contactBoxAnimation } from './animations/contact-box.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [listAnimation, routerTransitionAnimation, contactBoxAnimation]
})
export class AppComponent {
  projectsListActive: boolean = false;
  contactBoxActive: boolean = false;
  projects: Submenu[] = [{name: "Web App", link: "/project1"}, {name: "Java Mini Game", link: "/project2"}, {name: "Pipelined Processor", link: "/project3"}, {name: "RFID tag", link: "/project4"}];
  selectedItem: string;


  toggleProjectsList(): void {
    this.projectsListActive = !this.projectsListActive;
  }

  toggleContactBox(): void {
    this.contactBoxActive = !this.contactBoxActive;
  }

  onSelect(item: string): void {
    this.selectedItem = item;
  }

  openResume(): void {
    window.open("../assets/RESUME_SK5.pdf");
  }
}
