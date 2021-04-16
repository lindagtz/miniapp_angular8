import {Component} from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente{

    public titulo: string;
    public comentario;
    public year: number;
    constructor(){
        this.titulo= "Hola mundo, soy mi componente";
        this.comentario="primer prueba";
        this.year=2021;
        console.log("Componente cargado",this. year);
    }
}