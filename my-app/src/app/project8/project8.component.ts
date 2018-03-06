import { Component, ViewChild, ElementRef } from '@angular/core';
import { routerTransitionAnimation } from '../animations/router-transition.animation';

@Component({
  selector: 'proj8',
  templateUrl: './project8.component.html',
  styleUrls: ['./project8.component.css'],
  animations: [routerTransitionAnimation],
  host: { '[@routerTransitionAnimation]': "'true'",
          '[style.display]': "'block'",               //required for animation
          '[style.position]': "'absolute'",           //required for animation
          '[style.width]': "'100%'"}

})

export class Project8Component {

}
