import {animate, group, style, transition, trigger} from "@angular/animations";

const startStyle = style({opacity: 0, transform: 'translateY(20%)'});
const endStyle = style({opacity: 1, transform: 'translateY(0%)'});

export const routerFade = trigger('routerFade',[
  transition('* <=> *', [
    startStyle,
    group([animate('0.2s', endStyle)])
  ]),
])
