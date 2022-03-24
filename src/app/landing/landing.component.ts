import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: '/',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})



export class LandingComponent implements OnInit {

  visibleAngular = true; //show and hide for Projects
  visibleJavaScript = true; //show and hide for Projects
  animateGreetingLine1 = false;
  animateGreetingLine2 = false;
  animateGreetingLine3 = false;
  animateButtonOnOff = false;
  inViewPort = true;
  skillsAnimationIn1 = false;
  skillsAnimationIn2 = false;
  skillsAnimationIn3 = false;
  skillsAnimationOut1 = false;
  skillsAnimationOut2 = false;
  skillsAnimationOut3 = false;

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

  animateGreetingLineOne() {//animates "Hi," on landing top 
    this.animateGreetingLine1 = true;
  }

  animateGreetingLineTwo() {//animates "I'm Dennis Kemnade" on landing top
    setTimeout(() => {
      this.animateGreetingLine2 = true;
    }, 1500);
  }

  animateGreetingLineThree() {//animates "Frontend Developer" on landing top
    setTimeout(() => {
      this.animateGreetingLine3 = true;
    }, 4000);
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
      if (this.inViewPort) {
        setTimeout(() => {
          this.animateButtonOnOff = false;
        }, 1000);
      }
    }, 3000);
  }

  scrollEvent = (event: any): void => {
    /**
     * event for start toggle animation on "contact me" Button
     */
    if (window.pageYOffset > 200) {
      this.inViewPort = false;
    } else if (window.pageYOffset < 200) {
      this.inViewPort = true; 
    }
    /**
     * event for start animation on "My Skills" section
     */
    if(window.pageYOffset > 400 && window.pageYOffset < 1100){
      this.skillsAnimationIn1 = true;
      this.skillsAnimationOut1 = false;
      console.log('true ', window.pageYOffset );
    }else if(window.pageYOffset > 1100 || window.pageYOffset < 400){
      this.skillsAnimationIn1 = false;
      this.skillsAnimationOut1 = true;
    }

    if(window.pageYOffset > 600 && window.pageYOffset < 1300){
      this.skillsAnimationIn2 = true;
      this.skillsAnimationOut2 = false;
      console.log('true ', window.pageYOffset );
    }else if(window.pageYOffset > 1100 || window.pageYOffset < 600){
      this.skillsAnimationIn2 = false;
      this.skillsAnimationOut2 = true;
    }

    if(window.pageYOffset > 800 && window.pageYOffset < 1500){
      this.skillsAnimationIn3 = true;
      this.skillsAnimationOut3 = false;
      console.log('true ', window.pageYOffset );
    }else if(window.pageYOffset > 1100 || window.pageYOffset < 800){
      this.skillsAnimationIn3 = false;
      this.skillsAnimationOut3 = true;
    }


    /* console.log(this.animateButtonOnOff); */
    /* console.log(window.pageYOffset); */

  }


}