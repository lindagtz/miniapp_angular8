import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = "";
  constructor() { 

    
  }

  ngOnInit(): void {
  }

  //creamos los eventos que estan en el html y declaramos las variables a usar arriba
  countClick(){
    //contando las tareas click
    this.clickCounter +=1;
  }

}
