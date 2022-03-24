import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  backToTopOpenClose = false;

  ngOnInit(){

  }

  scrollevent = (event: any): void =>{
    if(window.pageYOffset > 600){
      this.backToTopOpenClose = true;
    }

    console.log('scroll y: ', window.screenY);
  }

  
}
