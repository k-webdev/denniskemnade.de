import { ViewportScroller } from '@angular/common';
import { identifierName } from '@angular/compiler';
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

  constructor() {
  }

  ngOnInit(): void {
    /* window.addEventListener('scroll', this.scrollEvent, true); */
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

  /* ================================ Use intersectionObserver for start and stop animations ================================ */

  animierteElemente = document.querySelectorAll('.test');// Alle Elemente mit der Klasse "test" werden beobachtet

  kofiguration = {
    threshold: [0, 0.75]//"0" ist der Standartwert, 0.75 gibt an wie viel prozent sichtbar sein sollen(hier 75%).
  };

  observer = new IntersectionObserver(
    (elemente) => {
      /*console.log(elemente);*/ //kann zur Anzeige der Elemente in der Konsole genutzt werden.
      elemente.forEach((element) => {
        if (element.intersectionRatio > 0.75) {// wenn das element mindestens 75% im sichtfeld liegt. (0.75 klappt nur wenn threshold den Wert kennt).
          element.target.classList.add('sichtbar');//hinzufügen der klasse "sichtbar", welche die Animation beinhaltet.
        } else {
          element.target.classList.remove('sichtbar');//entfernen der Klasse "sichtbar".
        }
      });
    }, this.kofiguration
  );

  this.animierteElemente.forEach((eintrag) => {
    this.observer.observe(eintrag);
  });

  
/* ============================== Use intersectionObserver for start and stop animations end ============================== */
}