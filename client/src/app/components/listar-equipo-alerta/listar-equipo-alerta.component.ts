import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Equipo } from 'src/app/models/equipo';
import { EquipoAlertaService } from 'src/app/services/equipo-alerta.service';

@Component({
  selector: 'app-listar-equipo-alerta',
  templateUrl: './listar-equipo-alerta.component.html',
  styleUrls: ['./listar-equipo-alerta.component.css']
})
export class ListarEquipoAlertaComponent implements OnInit {
  listEquipoAlerta: Equipo[] = [];
  suscription: Subscription = new Subscription;
  constructor(private _equipoAlertaService: EquipoAlertaService) { }

  ngOnInit(): void {
    this.obtenerEquipo();
    this.suscription = this._equipoAlertaService.refresh$.subscribe(() => {
      this.obtenerEquipo();
    })
  }
  obtenerEquipo() {
    ;
    this._equipoAlertaService.getEquipos().subscribe(data => {
      this.listEquipoAlerta = data;
    });
  }
}


