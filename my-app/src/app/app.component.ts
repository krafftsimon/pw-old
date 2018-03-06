import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
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
  projects: Submenu[] = [
    {name: "Gym Progress Tracker", link: "/project1"},
    {name: "React / Redux App", link: "/project8"},
    {name: "Online Pong Game", link: "/project7"},
    {name: "Fractal Renderer", link: "/project6"},
    {name: "Java Mini Game", link: "/project2"},
    {name: "Pipelined Processor", link: "/project3"},
    {name: "RFID Tag", link: "/project4"},
    {name: "IoT", link: "/project5"},
  ];
  selectedItem: string;
  mobileQuery: MediaQueryList;
  _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 790px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

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
    window.open("../assets/RESUME.pdf");
  }

  openLinkedin(): void {
    window.open("https://www.linkedin.com/in/simon-krafft-50611714a");
  }
}
