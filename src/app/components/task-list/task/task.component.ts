import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  //usar datos de otro componente ingresan datos
  @Input() task: Task;
  @Input() index: number;
//number porque va a recibir el indice , output saca datos de aqui
  @Output() remove = new EventEmitter<number>();
  @Output() complete = new EventEmitter<number>();


  //inout al principio demas al final,no se ponen en el constructor
  constructor() {    
    this.remove = new EventEmitter<number>(); 
    this.complete= new EventEmitter<number>();
  }

  ngOnInit() {
  }

  //funciones

  taskCheckedEvent(){
    //necesitamos emitir el indice para borrarlo
    this.complete.emit(this.index);
 
  }
  removeEvent(){
    this.remove.emit(this.index);


  }

}
