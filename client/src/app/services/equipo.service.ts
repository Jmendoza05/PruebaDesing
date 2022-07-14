import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  url = 'http://localhost:4000/api/equipos/';

  private _refresh$ = new Subject<void>();
  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  getEquipos(): Observable<any> {
    return this.http.get(this.url)
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      )
  }
  eliminarEquipo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  guardarEquipo(equipo: Equipo): Observable<any> {
    return this.http.post(this.url, equipo);
  }
  obtenerEquipo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  editarEquipo(id: string, equipo: Equipo): Observable<any> {
    return this.http.put(this.url + id, equipo);
  }
  obtenerEquipoAlerta(tipo: any): Observable<any> {
    return this.http.get(this.url, tipo);
  }
}
