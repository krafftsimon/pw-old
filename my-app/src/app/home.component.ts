import { Component } from '@angular/core';
import { routerTransitionAnimation } from './animations/router-transition.animation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routerTransitionAnimation],
  host: { '[@routerTransitionAnimation]': "'true'",
          '[style.display]': "'block'",               //required for animation
          '[style.position]': "'absolute'",           //required for animation
          '[style.width]': "'100%'"}

})

export class HomeComponent {
}
