import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {
  equipoForm: FormGroup;
  titulo = 'crear equipo';
  tituloButton = 'Crear';
  id: string | null;
  constructor(private fb: FormBuilder,
    private router: Router,
    private _equipoService: EquipoService,
    private aRouter: ActivatedRoute) {
    this.equipoForm = this.fb.group({
      equipo: ['', Validators.required],
      valorMaximo: ['', Validators.required]
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarEquipo() {

    const EQUIPO: Equipo = {
      nombre: this.equipoForm.get('equipo')?.value,
      valorMaximo: this.equipoForm.get('valorMaximo')?.value,
      valorActual: 0
    }
    if (this.id !== null) {
      this._equipoService.editarEquipo(this.id, EQUIPO).subscribe(data => {
        this.router.navigate(['/']);
      })
    } else {
      this._equipoService.guardarEquipo(EQUIPO).subscribe(data => {
        this.router.navigate(['/']);
      })
    }

  }
  esEditar() {
    if (this.id !== null) {
      this.titulo = 'editar equipo';
      this.tituloButton = 'Editar';
      this._equipoService.obtenerEquipo(this.id).subscribe(data => {
        this.equipoForm.setValue({
          equipo: data.nombre,
          valorMaximo: data.valorMaximo
        })
      })
    }
  }

}
