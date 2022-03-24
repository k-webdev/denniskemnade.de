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

  /**
   * This function use the openCloseCounter to check the menu status. 
   * 
   * @param{boolean} openCloseCounter - this is the 
   */
  openCloseMenu() {
    if (this.openCloseCounter == false) {
      this.openCloseCounter = true;
    } else if (this.openCloseCounter == true) {
      this.openCloseCounter = false;
    }
  }
}