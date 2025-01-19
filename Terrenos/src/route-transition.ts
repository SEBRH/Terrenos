import { trigger, transition, style, animate, query } from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
    transition('* <=> *', [
      style({ opacity: 0 }),
      animate('1000ms', style({ opacity: 1 }))
    ])
]);