import { UtilProvider } from './../shared/providers/util';
import { CalculoMiojo } from './../shared/models/calculoMiojo';
import { Component, OnInit } from '@angular/core';
import { MiojoService } from '../shared/services/miojo.service';
import { take } from 'node_modules/rxjs/operators';

@Component({
  selector: 'app-miojo',
  templateUrl: './miojo.component.html',
  styleUrls: ['./miojo.component.scss']
})
export class MiojoComponent implements OnInit {

  loading = false;
  calcMiojo = new CalculoMiojo();

  constructor(
    private servico: MiojoService,
    private util: UtilProvider
    ) { }

  ngOnInit() {
  }

  calcular(){
    this.loading = true;

    this.servico.calcularTempoMiojo(this.calcMiojo).pipe(take(1))
    .subscribe((result) => {
      this.util.alerta('success', 'Sucesso', result);
      this.loading = false;
    }, err => {
      this.util.alerta('error', 'Falha', err.error);
      this.loading = false;
    });
  }

}
