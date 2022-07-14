import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoAlertaService {
  url = 'http://localhost:4000/api/equipos/equipoAlerta'
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
}
