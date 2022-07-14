export class Equipo {
    _id?: number;
    nombre: string;
    valorMaximo: number;
    valorActual: number;
    fechaActualizacionValor?: Date;

    constructor(nombre: string, valorMaximo: number, valorActual: number, fechaActualizacionValor: Date) {
        this.nombre = nombre;
        this.valorMaximo = valorMaximo;
        this.valorActual = valorActual;
        this.fechaActualizacionValor = fechaActualizacionValor;
    }
}
export class EquipoAlerta {
    _id?: number;
    nombre: string;
    valorMaximo: number;
    valorActual: number;
    fechaActualizacionValor?: Date;

    constructor(nombre: string, valorMaximo: number, valorActual: number, fechaActualizacionValor: Date) {
        this.nombre = nombre;
        this.valorMaximo = valorMaximo;
        this.valorActual = valorActual;
        this.fechaActualizacionValor = fechaActualizacionValor;
    }
}