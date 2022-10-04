import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface RedesSociales {
  facebook: number;
  youtube: number;
  whatsapp: number;
  "facebook-messenger": number;
  instagram: number;
}

const URL: string = 'http://localhost:3000/grafica';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsuariosRedesSociales(): Observable<RedesSociales> {
    return this.http.get<RedesSociales>(URL);
  }

}
