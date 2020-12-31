export class Vuelo{
    origen:string;
    destino:string;
    precio:number;
    fecha:string;
    hora:string;
    constructor(origen:string,destino:string,precio:number,fecha:string,hora:string) {
        this.origen=origen;
        this.destino=destino;
        this.precio=precio;
        this.fecha=fecha;
        this.hora=hora;
    }

}