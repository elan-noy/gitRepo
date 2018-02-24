import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styles: ['.k-calendar { margin: 0 auto; }'],
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

  public events: string[] = [];
  public value: Date = new Date();
  public focusedDate: Date;
  public min: Date;
  public max: Date;

  public onBlur(): void {
    this.log('blur');
  }

  public onFocus(): void {
    this.log('focus');
  }

  public onOpen(): void {
    this.log('open');
  }

  public onClose(): void {
    this.log('close');
  }

  public onChange(value: Date): void {
    this.log('change', value);
  }

  private log(event: string, value?: Date): void {
    this.events = [`${event}${this.formatValue(value)}`].concat(this.events);
  }

  private formatValue(value?: Date): string {
    return value ? ` - ${this.intl.formatDate(value, 'd')}` : '';
  }

  constructor(private intl: IntlService) {
    let now = new Date();
    this.min = new Date(now.setDate(now.getDate() - now.getDay()));
    this.max = new Date(now.setDate(now.getDate() + 7 - now.getDay()));
    this.focusedDate = new Date(now.setDate(now.getDate() - 4));
    console.log(this.focusedDate)
  }
}
