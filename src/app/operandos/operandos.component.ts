import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operandos',
  templateUrl: './operandos.component.html',
  styleUrls: ['./operandos.component.css']
})
export class OperandosComponent implements OnInit {

  @Output() resultadoSuma = new EventEmitter<number>();
  operandoA: number;
  operandoB: number;

  constructor() { }

  ngOnInit() {
  }

  OnSumar(): void {
    let result = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(result);
  }

}
