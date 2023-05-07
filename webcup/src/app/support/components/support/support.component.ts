import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
	showTextOne = false;
	showTextTwo = false;
	showTextThree = false;
	showTextFour = false;
	showTextFive = false;

	  toggleOne() {
	    this.showTextOne = !this.showTextOne;
	  }
	  toggleTwo() {
	    this.showTextTwo = !this.showTextTwo;
	  }
	  toggleThree() {
	    this.showTextThree = !this.showTextThree;
	  }
	  toggleFour() {
	    this.showTextFour = !this.showTextFour;
	  }
	  toggleFive() {
	    this.showTextFive = !this.showTextFive;
	  }
}
