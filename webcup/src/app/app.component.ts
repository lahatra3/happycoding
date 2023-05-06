import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  header!: HTMLElement;
  title = 'webcup';

  constructor() {}

  ngOnInit(): void {
    this.header = <HTMLElement>document.querySelector('header');
    window.addEventListener('scroll', () => {
      this.header.classList.toggle('scrollHeader', window.scrollY > 19);      
    });
  }
}
