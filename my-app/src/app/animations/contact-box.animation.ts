import { trigger, state, animate, transition, style } from '@angular/animations';

export const contactBoxAnimation =
  trigger('contactBoxAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-20%)' }),
      animate('0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ opacity: 1, transform: 'translateY(0)'  })),
    ]),
    transition(':leave', [
      style({ opacity: 1, transform: 'translateY(0)' }),
      animate('0.3s cubic-bezier(0.215, 0.61, 0.355, 1)', style({ opacity: 0, transform: 'translateY(-20%)'  })),
    ]),
  ])
