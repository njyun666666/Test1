import { trigger, transition, style, query, animateChild, group, animate, state } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [

    transition('* <=> *', [
      //style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width:'100%'
        })
      ]),
      query(':enter', [
        style({ opacity: 0 })
      ]),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('200ms', style({ opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('200ms', style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ])

  ]);
