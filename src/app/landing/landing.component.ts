import { Component, OnInit } from '@angular/core';


@Component({
  selector: '/',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})



export class LandingComponent implements OnInit {

  
  inViewPort = true;//Animatet Button contact me
  animateGreetingLine1 = false;
  animateGreetingLine2 = false;
  animateGreetingLine3 = false;
  animateButtonOnOff = false;

  constructor() {
  }

  ngOnInit(): void {
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

 
}