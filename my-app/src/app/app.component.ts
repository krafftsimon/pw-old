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
  sideNavActive: boolean = true;
  projects: Submenu[] = [{name: "Web App", link: "/project1"},
                        {name: "Java Mini Game", link: "/project2"},
                        {name: "Pipelined Processor", link: "/project3"},
                        {name: "RFID tag", link: "/project4"},
                        {name: "IoT", link: "/project5"},
                        {name: "Fractal", link: "/project6"}];
  selectedItem: string;


  toggleProjectsList(): void {
    this.projectsListActive = !this.projectsListActive;
    console.log(this.projectsListActive);
  }

  toggleContactBox(): void {
    this.contactBoxActive = !this.contactBoxActive;
  }

  sideNavIconToggle(): void {
    this.sideNavActive = !this.sideNavActive
  }

  onSelect(item: string): void {
    this.selectedItem = item;
  }

  openResume(): void {
    window.open("../assets/RESUME.pdf");
  }
}
