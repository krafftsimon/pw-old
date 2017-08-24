import { trigger, state, animate, transition, style, query, stagger } from '@angular/animations';

export const routerTransitionAnimation =
  trigger('routerTransitionAnimation', [
    state('*', style({transform: 'translateY(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateY(-80%)', opacity: 0}),
        animate('0.6s cubic-bezier(0.215, 0.61, 0.355, 1)')
      ]),
      transition('* => void', animate(300, style({transform: 'translateY(80%)', opacity: 0})))
  ])
