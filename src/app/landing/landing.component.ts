import { Component, OnInit } from '@angular/core';

@Component({
  selector: '/',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit  {

  visibleAngular = true;
  visibleJavaScript = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  showAllProjects(){
    this.visibleAngular = true;
    this.visibleJavaScript = true;
  }
  

  showElementAngular(){
    this.visibleAngular = true;
    this.visibleJavaScript = false;
  }

  showElementJavaScript(){
    this.visibleJavaScript = true;
    this.visibleAngular = false;
  }
}
