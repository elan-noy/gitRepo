import { Component, OnInit } from '@angular/core';
 
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',

  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(50%)',
      })),
      state('enlarge', style({
        transform: 'scale(1.5) translate(30%)',
      })),
      state('spin', style({
        transform: 'rotateY(10deg) rotateZ(10deg) translate(20%)',
      })),
      transition('* => *', animate('500ms ease')),
    ])
  ]
})
export class AnimationComponent implements OnInit {
  boxClass: boolean = true;
  show = false;
  move: string;
  constructor() { }
  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = !this.show;
  }
  getmove() {
    this.move = 'move';
  }
  getenlarge() {
    this.move = 'enlarge';
  }
  getspin() {
    this.move = 'spin';
  }
  sqToCircle() {
    this.boxClass = (this.boxClass === true) ? false : true;  
  }
  ngOnInit() {
  }

}
