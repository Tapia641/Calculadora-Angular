import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  operandoA: number;
  operandoB: number;
  resultadoOperandos: number;

  constructor() { }

  onSumaOperandos() {
    this.resultadoOperandos = this.operandoA + this.operandoB;
  }

}
