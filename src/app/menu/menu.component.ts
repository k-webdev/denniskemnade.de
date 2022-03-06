import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() {
    this.openCloseMenu();
  }

  ngOnInit(): void {
  }

  openCloseCounter = false;


  openCloseMenu() {
    if (this.openCloseCounter == false) {
      this.openCloseCounter = true;
    }else if(this.openCloseCounter == true){
      this.openCloseCounter = false;
    }

    console.log(this.openCloseCounter);
  }

}