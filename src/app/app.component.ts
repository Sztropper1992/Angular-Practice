import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  recipePage : boolean = true;

  onPage(string : string){
    if(string == "recipes"){
      this.recipePage = true;
    }
    else if(string == "Shopping"){
      this.recipePage = false;
    }
  }

}
