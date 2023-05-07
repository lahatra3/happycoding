import { Component, OnInit } from '@angular/core';
import { listemenu } from './listemenu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  listemenu!: {label: string; route: string}[];

  constructor() {}

  ngOnInit(): void {
    this.listemenu = listemenu;
  }
  
}
