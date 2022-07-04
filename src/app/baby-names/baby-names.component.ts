import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baby-names',
  templateUrl: './baby-names.component.html',
  styleUrls: ['./baby-names.component.scss']
})
export class BabyNamesComponent implements OnInit {

  boyNames = ['Dennis', 'Malte', 'Maimilian', 'Frank', 'Sven'];
  girlNames = ['Dina', 'Julia', 'Celin', 'Lisa', 'Svenja'];

  constructor() { }

  ngOnInit(): void {
    this.getNames();
  }

  getNames(){
    
  }

}
