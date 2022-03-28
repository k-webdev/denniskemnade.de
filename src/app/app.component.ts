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
  }

  scrollevent = (event: any): void =>{
    if(window.pageYOffset > 600){
      this.backToTopOpenClose = true;
    }else{
      this.backToTopOpenClose = false;
    }

    /* console.log('scroll y: ', window.screenY); */
  }


  

  
}
