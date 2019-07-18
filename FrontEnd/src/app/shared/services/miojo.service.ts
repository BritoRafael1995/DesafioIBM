import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MiojoService {

  baseUrl: string;
  constructor(private httpClient: HttpClient ) { 
    this.baseUrl = environment.baseUrl;
  }

  calcularTempoMiojo(parametros){
    return this.httpClient.post(this.baseUrl, parametros);
  }
}
