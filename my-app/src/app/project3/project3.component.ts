import { Component } from '@angular/core';
import { routerTransitionAnimation } from '../animations/router-transition.animation';

@Component({
  selector: 'proj3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.css'],
  animations: [routerTransitionAnimation],
  host: { '[@routerTransitionAnimation]': "'true'",
          '[style.display]': "'block'",               //required for animation
          '[style.position]': "'absolute'",           //required for animation
          '[style.width]': "'100%'"}
})

export class Project3Component {
}
