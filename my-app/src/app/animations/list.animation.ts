import { trigger, state, animate, transition, style } from '@angular/animations';

export const listAnimation =
  trigger('listAnimation', [
    transition(':enter', [
      style({ height: 0 }),
      animate('0.50s cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ height: '*' })),
    ]),
    transition(':leave', [
      style({ height: '*'}),
      animate(200, style({ height: 0 })),
    ]),
  ])
