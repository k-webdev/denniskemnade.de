import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsAnimationIn1 = false;
  skillsAnimationIn2 = false;
  skillsAnimationIn3 = false;
  skillsAnimationOut1 = false;
  skillsAnimationOut2 = false;
  skillsAnimationOut3 = false;

  constructor() { }

  ngOnInit(): void {
    this.classesToAnimate();
  }

  /* ================================ Use intersectionObserver for start and stop animations ================================ */

  classesToAnimate() {
    setInterval(() => {
      this.loadAnimationsOnViewport();
    }, 100);
  }


  loadAnimationsOnViewport() {

    const kofiguration = {
      threshold: [0, 0.75, 1]//"0" ist der Standartwert, 0.75 gibt an wie viel prozent sichtbar sein sollen(hier 75%).
    };

    const observer = new IntersectionObserver(
      (elemente) => {
        /* console.log(elemente); */ //kann zur Anzeige der Elemente in der Konsole genutzt werden.
        elemente.forEach((element) => {

          if (element.intersectionRatio == 1 && element.intersectionRatio > 0.75) {// wenn das element mindestens 75% im sichtfeld liegt. (0.75 klappt nur wenn threshold den Wert kennt).
            
              element.target.classList.add('my-skills-animationIn');//hinzufügen der klasse "sichtbar", welche die Animation beinhaltet.
              element.target.classList.remove('my-skills-animationOut');
            
          } else if(element.intersectionRatio < 0.75){
            
              element.target.classList.remove('my-skills-animationIn');//hinzufügen der klasse "sichtbar", welche die Animation beinhaltet.
              element.target.classList.add('my-skills-animationOut');
            
          }

        });
      }, kofiguration
    );

    const animatedElements = document.querySelectorAll('sort-text-img');// Alle Elemente mit der Klasse "test" werden beobachtet
    /* this.elementsToCheck(animatedElements, observer); */
  }

  elementsToCheck(animatedElements, observer) {
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }

  /* ============================== Use intersectionObserver for start and stop animations end ============================== */

}
