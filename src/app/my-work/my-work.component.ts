import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  visibleAngular = true; //show and hide for Projects
  visibleJavaScript = true; //show and hide for Projects

  constructor() { }

  ngOnInit(): void {
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
