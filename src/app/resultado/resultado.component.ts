import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  // RECIBIR INFORMACION DEL COMPONENTE PADRE
  @Input() resultado: number;

  constructor() { }

  ngOnInit() {
  }




}
