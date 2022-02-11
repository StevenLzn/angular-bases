import { NgModule } from "@angular/core";
import { ListComponent } from './list/list.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from "@angular/common";

@NgModule({
    // En declarations se agrupa los componentes de un mismo modulo
    declarations: [
        ListComponent,
        HeroeComponent
    ],

    // En exports van los componentes que vamos hacer publicos y que pueden ser usados en otros modulos
    exports: [
        ListComponent
    ],
    // En imports van modulos que traemos para usarlos dentro del modulo donde se importa
    imports: [
        // CommonModule es necesario para poder hacer uso de directivas como *ngFor y *ngIf dentro del modulo, por eso lo importamos
        CommonModule
    ]
})
export class HeroesModule { }