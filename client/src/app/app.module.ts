import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearEquipoComponent } from './components/crear-equipo/crear-equipo.component';
import { ListarEquipoComponent } from './components/listar-equipo/listar-equipo.component';
import { ListarEquipoAlertaComponent } from './components/listar-equipo-alerta/listar-equipo-alerta.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearEquipoComponent,
    ListarEquipoComponent,
    ListarEquipoAlertaComponent,
    NavbarComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
