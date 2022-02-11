import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heroes: string[] = [ 'Spiderman', 'Superman', 'Batman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(): void{
    this.heroeBorrado = this.heroes[0] || '';
    this.heroes.splice(0, 1);   
  }

}
