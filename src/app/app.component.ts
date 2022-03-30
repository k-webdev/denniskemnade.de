import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  backToTopOpenClose = false;

  ngOnInit(){
    window.addEventListener('scroll', this.scrollevent, true);
    this.classesToAnimate();
  }

  scrollevent = (event: any): void =>{
    if(window.pageYOffset > 600){
      this.backToTopOpenClose = true;
    }else{
      this.backToTopOpenClose = false;
    }

    /* console.log('scroll y: ', window.screenY); */
  }


  

    /* ================================ Use intersectionObserver for start and stop animations ================================ */

    classesToAnimate() {
      setInterval(() => {
        this.loadAnimationsOnViewport('.rect');
        this.loadAnimationsOnViewport('.sort-text-img');
      }, 100);
    }
  
  
    loadAnimationsOnViewport(classesToCheck) {

      let componentName = classesToCheck;
  
      let checkedClass = classesToCheck;
  
      const kofiguration = {
        threshold: [0, 0.75, 1]//"0" ist der Standartwert, 0.75 gibt an wie viel prozent sichtbar sein sollen(hier 75%).
      };
  
      const observer = new IntersectionObserver(
        (elemente) => {
         /*  console.log(elemente); */ //kann zur Anzeige der Elemente in der Konsole genutzt werden.
          elemente.forEach((element) => {
  
            if (element.intersectionRatio == 1 && element.intersectionRatio > 0.75) {// wenn das element mindestens 75% im sichtfeld liegt. (0.75 klappt nur wenn threshold den Wert kennt).
              if(componentName == '.rect'){  //my skills
              element.target.classList.add('animationSlideIn');//hinzufügen der klasse "sichtbar", welche die Animation beinhaltet.
                element.target.classList.remove('animationSlideOut');
              }else if(componentName == '.sort-text-img'){ //my work
                element.target.classList.add('my-skills-animationIn');//hinzufügen der klasse "sichtbar", welche die Animation beinhaltet.
                element.target.classList.remove('my-skills-animationOut');
              }

            } else if(element.intersectionRatio < 0.75){
                if(componentName == '.rect'){ //my skills
                  element.target.classList.remove('animationSlideIn');//hinzufügen der klasse "sichtbar", welche die Animation beinhaltet.
                element.target.classList.add('animationSlideOut');
                }else if(componentName == '.sort-text-img'){  //my work
                  element.target.classList.remove('my-skills-animationIn');//hinzufügen der klasse "sichtbar", welche die Animation beinhaltet.
                  element.target.classList.add('my-skills-animationOut');
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
