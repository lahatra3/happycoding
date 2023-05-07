import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parttwo',
  templateUrl: './parttwo.component.html',
  styleUrls: ['./parttwo.component.scss']
})
export class ParttwoComponent {
	isVisible = false;
	isAnimate = false;
	// isHover = false;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const observerLeft = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isAnimate = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(this.el.nativeElement.querySelector('.text-container'));
    observerLeft.observe(this.el.nativeElement.querySelector('.text-container-left'));
  }

  

//   startAnimation() {
//     this.isHover = true;
//   }

//   stopAnimation() {
//     this.isHover = false;
//   }
}
