import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
            <h1>{{ title }}</h1>
            <h3>La base es: <strong>{{base}}</strong></h3>

            <br>

            <button (click)="acumular(1)">+ 1</button>
            <span>{{numero_1}}</span>
            <button (click)="acumular(-1)">- 1</button>

            <br><br>
            <button (click)="acumular_X5(base)">+ {{base}}</button>
            <span>{{numero_2}}</span>
            <button (click)="acumular_X5(-base)">- {{base}}</button>
    `
})

export class ContadorComponent {
            title: string = 'CONTADOR APP';
            numero_1: number = 10;
            numero_2: number = 10;
            base: number = 5;

            // sumar(){
            //   this.numero += 1;
            // }
            // restar(){
            //   this.numero -= 1;
            // }

            acumular(valor: number){
                this.numero_1 += valor;
            }

            acumular_X5(valor: number){
                this.numero_2 += valor;
            }
}