import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public question: string;
  public answers: any[];
  public answerCorrect: boolean;
  public answerChoose: boolean;





  constructor() { 
    this.question='¿Cuál es la capital de México?';
    this.answers = [
      {
      'answer': 'Pachuca',
      'correct':false
    },
    {
      'answer': 'Guadalajara',
      'correct':false
    },
    {
      'answer': 'CDMX',
      'correct':true
    },
    {
      'answer': 'Torreón',
      'correct':false
    }
    ];
    this.answerCorrect= false;
    this.answerChoose= false;
  }

  ngOnInit(): void {
  }
//esta funcion es para validar si la respuesta seleccionada es correcta
    checkAnswerIndex(index){
      this.answerCorrect= this.answers[index].correct;
      this.answerChoose=true;
      console.log(this.answerCorrect);

    }
    //otra funcion para validar
    checkAnswerObj(obj){
      //agregamos el correct answer arriba para mostrar el mensaje
      const correct= obj.correct;
      this.answerChoose=true;
      console.log(correct);


    }
}
