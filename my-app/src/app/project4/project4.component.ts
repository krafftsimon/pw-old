import { Component } from '@angular/core';
import { routerTransitionAnimation } from '../animations/router-transition.animation';

@Component({
  selector: 'proj4',
  templateUrl: './project4.component.html',
  styleUrls: ['./project4.component.css'],
  animations: [routerTransitionAnimation],
  host: { '[@routerTransitionAnimation]': "'true'",
          '[style.display]': "'block'",               //required for animation
          '[style.position]': "'absolute'",           //required for animation
          '[style.width]': "'100%'"}
})

export class Project4Component {

  openPosterPresentation(): void {
    window.open("../assets/Poster_Presentation_Final_G15.pdf");
  }
}
