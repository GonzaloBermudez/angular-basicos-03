import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  // constructor() { }
  // ngOnInit(): void {
  // }
  heroes: string[] = ['Spiderman','Ironman', 'Hulk', 'Thor', 'Capitán America'];
  heroeBorrado: string = "";

  //metodo
  borrarHeroe(){
    // console.log('borrando...');

    this.heroeBorrado = this.heroes.shift() || '';
    // console.log(borrado);
  }

  

}
