import { Component, OnInit } from '@angular/core';
import { listeicones } from './listeicones';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listeicones!: {path: string, color: string}[];

  constructor() {}

  ngOnInit(): void {
    this.listeicones = listeicones;
  }
}
