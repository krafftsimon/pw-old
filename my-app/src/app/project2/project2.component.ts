import { Component } from '@angular/core';
import { routerTransitionAnimation } from '../animations/router-transition.animation';

@Component({
  selector: 'proj2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css'],
  animations: [routerTransitionAnimation],
  host: { '[@routerTransitionAnimation]': "'true'",
          '[style.display]': "'block'",
          '[style.position]': "'absolute'",
          '[style.width]': "'100%'" }
})

export class Project2Component {
}
