import { trigger, state, animate, transition, style, query, stagger } from '@angular/animations';

export const routerTransitionAnimation =
  trigger('routerTransitionAnimation', [
    state('*', style({
      transform: 'translateX(0)',
      opacity: 1
    })),
    transition('void => *', [
      style({transform: 'translateX(-20%)', opacity: 0}),
      animate('0.8s cubic-bezier(0.315, 0.61, 0.355, 1)'),
    ])
  ])
