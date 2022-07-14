import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEquipoComponent } from './components/crear-equipo/crear-equipo.component';
import { ListarEquipoAlertaComponent } from './components/listar-equipo-alerta/listar-equipo-alerta.component';
import { ListarEquipoComponent } from './components/listar-equipo/listar-equipo.component';

const routes: Routes = [
  {path: '',component: ListarEquipoComponent},
  {path: 'crear-equipo',component: CrearEquipoComponent},
  {path: 'editar-equipo/:id',component: CrearEquipoComponent},
  {path:'historial-alerta-equipo',component: ListarEquipoAlertaComponent},
  {path: '**',redirectTo:'',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
