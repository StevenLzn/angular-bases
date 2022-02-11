import { Component } from "@angular/core";

@Component({
    selector: "app-contador",
    template: `
        <h1>{{ title }}</h1>
        <h2> La base es: <strong> {{ base }}</strong></h2>
        <button (click)="accumulate(base)"> +{{ base }} </button>
        <span>{{ number }}</span>
        <button (click)="accumulate(-base)"> -{{ base }} </button>
    `
})
export class ContadorComponent {
    title: string = 'Contador App';
    number: number = 0;
    base: number = 5;
  
    accumulate( valor: number ): void {
      this.number += valor;
    }
}