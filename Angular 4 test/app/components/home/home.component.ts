import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  backgroundClass: boolean = true;
  show = false;
  
  bgRotate() {
    this.backgroundClass = (this.backgroundClass === true) ? false : true;
  }

  constructor() { }

  ngOnInit() {
  }

}



