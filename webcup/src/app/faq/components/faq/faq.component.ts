import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @ViewChild('questionsContainer') questionsContainer!: ElementRef;
  constructor() {}

  ngOnInit(): void {
    const buttons = document.querySelectorAll('button');

    buttons.forEach( button =>{
        button.addEventListener('click',()=>{
            const faq = button.nextElementSibling as Element;
            const icon = button.children[1];

            faq.classList.toggle('show');
            icon.classList.toggle('rotate');

            // close all other questions
          const questions = this.questionsContainer.nativeElement.querySelectorAll('.question');
          questions.forEach((question: any) => {
            if (question !== faq.parentElement) {
              question.querySelector('.question-content')?.classList.remove('show');
              question.querySelector('.d-arrow')?.classList.remove('rotate');
            }
          });
        })
    } )
    const a = <HTMLElement>document.querySelector('.robot a');
    const img = <HTMLElement>document.querySelector('.robot a img');

    img.addEventListener('mouseenter', () => {
      a.classList.add('hovered');
    });

    a.addEventListener('mouseleave', () => {
      a.classList.add('hovered');
    });

  }
}
