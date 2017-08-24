import { Component } from '@angular/core';
import { routerTransitionAnimation } from './animations/router-transition.animation';

@Component({
  selector: 'proj1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css'],
  animations: [routerTransitionAnimation],
  host: { '[@routerTransitionAnimation]': "'true'",
          '[style.display]': "'block'",               //required for animation
          '[style.position]': "'absolute'",           //required for animation
          '[style.width]': "'100%'"}

})

export class Project1Component {
}
