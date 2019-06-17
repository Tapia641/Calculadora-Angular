import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  operandoA: number;
  operandoB: number;
  resultadoOperandos: number;

  constructor() { }

  onSumaOperandos() {
    this.resultadoOperandos = this.operandoA + this.operandoB;
  }

}
