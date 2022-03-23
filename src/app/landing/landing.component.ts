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
  animateContactButton = false;

  constructor() {
  }

  ngOnInit(): void {
    this.animateGreetingLineOne();
    this.animateGreetingLineTwo();
    this.animateGreetingLineThree();
  }

  animateGreetingLineOne(){
    this.animateGreetingLine1 = true;
  }

  animateGreetingLineTwo(){
    setTimeout(()=>{
      this.animateGreetingLine2 = true;
    },1000);
  }

  animateGreetingLineThree(){
    setTimeout(()=>{
      this.animateGreetingLine3 = true;
    },3000);
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

  
}


