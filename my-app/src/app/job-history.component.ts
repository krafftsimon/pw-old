import { Component } from '@angular/core';
import { routerTransitionAnimation } from './animations/router-transition.animation';

@Component({
  selector: 'job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.css'],
  animations: [routerTransitionAnimation],
  host: { '[@routerTransitionAnimation]': "'true'",
          '[style.display]': "'block'",               //required for animation
          '[style.position]': "'absolute'",           //required for animation
          '[style.width]': "'100%'"}
})

export class JobHistoryComponent {

  openPosterPresentation(): void {
    window.open("../assets/Poster_Presentation_Final_G15.pdf");
  }
}
