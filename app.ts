import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  evaluate="" 
  
  takeinput(num:string){
    this.evaluate=this.evaluate+num;

  }
  
  result(){
    this.evaluate=eval(this.evaluate);
  }
  
  clear(){
    this.evaluate="";
   
  }
}
