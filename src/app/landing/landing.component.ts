import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: '/',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})



export class LandingComponent implements OnInit {

  visibleAngular = true;
  visibleJavaScript = true;
  animateGreetingLine1 = false;
  animateGreetingLine2 = false;
  animateGreetingLine3 = false;
  animateButtonOnOff = false;
  inViewPort = true;

  test = document.getElementById('btn-struggle');

  constructor() {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
    this.animateGreetingLineOne();
    this.animateGreetingLineTwo();
    this.animateGreetingLineThree();
    this.animateButton();
  }

  animateGreetingLineOne() {
    this.animateGreetingLine1 = true;
  }

  animateGreetingLineTwo() {
    setTimeout(() => {
      this.animateGreetingLine2 = true;
    }, 500);
  }

  animateGreetingLineThree() {
    setTimeout(() => {
      this.animateGreetingLine3 = true;
    }, 1500);
  }

  showAllProjects() {
    this.visibleAngular = true;
    this.visibleJavaScript = true;
  }


  showElementAngular() {
    this.visibleAngular = true;
    this.visibleJavaScript = false;
  }

  showElementJavaScript() {
    this.visibleJavaScript = true;
    this.visibleAngular = false;
  }

  animateButton() {
    setInterval(() => {
      this.animateButtonOnOff = true;
      console.log('inViewPort ',this.inViewPort);
      if (this.inViewPort) {
        setTimeout(() => {
          this.animateButtonOnOff = false;
        }, 1000);
      }
    }, 2000);
  }

  scrollEvent = (event: any): void => {
    if (window.pageYOffset > 200) {
      this.inViewPort = false;
    } else if(window.pageYOffset < 200){
      this.inViewPort = true;
    }
    /* console.log(this.animateButtonOnOff);
    console.log(window.pageYOffset); */

  }


}