import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Equipo } from 'src/app/models/equipo';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-listar-equipo',
  templateUrl: './listar-equipo.component.html',
  styleUrls: ['./listar-equipo.component.css']
})
export class ListarEquipoComponent implements OnInit {
  listEquipo: Equipo[] = [];
  suscription: Subscription = new Subscription;
  constructor(private _equipoService: EquipoService) { }

  ngOnInit(): void {
    this.obtenerEquipo();
    this.suscription = this._equipoService.refresh$.subscribe(() => {
      this.obtenerEquipo();
    })
  }
  obtenerEquipo() {
    this._equipoService.getEquipos().subscribe(data => {
      this.listEquipo = data;
    });
  }
  eliminarEquipo(id: any) {
    this._equipoService.eliminarEquipo(id).subscribe(data => {
      this.obtenerEquipo();
    })
  }

}
