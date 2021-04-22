import {animate, group, style, transition, trigger} from "@angular/animations";

const startStyle = style({opacity: 0, transform: 'translateY(20%)'});
const endStyle = style({opacity: 1, transform: 'translateY(0%)'});

export const fade = trigger('fade',[
  transition('* => void',[
    group([animate('0.2s', startStyle)])
  ]),
  transition(':enter', [
    startStyle,
    group([animate('0.2s', endStyle)])
  ]),
]);
