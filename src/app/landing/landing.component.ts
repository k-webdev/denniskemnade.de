import { ViewportScroller } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: '/',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})



export class LandingComponent implements OnInit {

  
  animateGreetingLine1 = false;
  animateGreetingLine2 = false;
  animateGreetingLine3 = false;
  animateButtonOnOff = false;
  inViewPort = true;//Animatet Button contact me

  constructor() {
  }

  ngOnInit(): void {
    this.animateGreetingLineOne();
    this.animateGreetingLineTwo();
    this.animateGreetingLineThree();
    this.animateButton();
    this.classesToAnimate();
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
  /* ================================ Use intersectionObserver for start and stop animations ================================ */

  classesToAnimate() {
    setInterval(() => {
      this.loadAnimationsOnViewport('.rect');
      this.loadAnimationsOnViewport('.sort-text-img');
    }, 100);
  }


  loadAnimationsOnViewport(classesToCheck) {

    let checkedClass = classesToCheck;

    const kofiguration = {
      threshold: [0, 0.75, 1]//"0" ist der Standartwert, 0.75 gibt an wie viel prozent sichtbar sein sollen(hier 75%).
    };

    const observer = new IntersectionObserver(
      (elemente) => {
        /* console.log(elemente); */ //kann zur Anzeige der Elemente in der Konsole genutzt werden.
        elemente.forEach((element) => {

          if (element.intersectionRatio == 1 && element.intersectionRatio > 0.75) {// wenn das element mindestens 75% im sichtfeld liegt. (0.75 klappt nur wenn threshold den Wert kennt).
            if (classesToCheck == '.sort-text-img') {
              element.target.classList.add('my-skills-animationIn');//hinzufügen der klasse "sichtbar", welche die Animation beinhaltet.
              element.target.classList.remove('my-skills-animationOut');
            } if (classesToCheck == '.rect') {
              element.target.classList.add('animationSlideIn');//hinzufügen der klasse "sichtbar", welche die Animation beinhaltet.
              element.target.classList.remove('animationSlideOut');
            }
          } else if(element.intersectionRatio < 0.75){
            if (classesToCheck == '.sort-text-img') {
              element.target.classList.remove('my-skills-animationIn');//hinzufügen der klasse "sichtbar", welche die Animation beinhaltet.
              element.target.classList.add('my-skills-animationOut');
            } if (classesToCheck == '.rect') {
              element.target.classList.remove('animationSlideIn');//hinzufügen der klasse "sichtbar", welche die Animation beinhaltet.
              element.target.classList.add('animationSlideOut');
            }
          }

        });
      }, kofiguration
    );

    const animatedElements = document.querySelectorAll(`${checkedClass}`);// Alle Elemente mit der Klasse "test" werden beobachtet
    this.elementsToCheck(animatedElements, observer);
  }

  elementsToCheck(animatedElements, observer) {
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }

  /* ============================== Use intersectionObserver for start and stop animations end ============================== */
}