import { Component } from "@angular/core";




@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})


export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    //getter
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    //metodo
    obtenerNombre() :string {
        return `${this.nombre} - ${this.edad}`;
    }

    //metodo
    cambiarNombre():void {
        console.log('hey nombre');
        this.nombre = 'Spiderman';
    }

    //metodo
    cambiarEdad(){
        console.log('hey edad');
        this.edad = 30;
    }
}