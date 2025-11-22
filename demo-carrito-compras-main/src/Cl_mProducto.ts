export interface iProducto {
    nombre: string;
    cantidad: number;
    precio: number;
    envio: string;
}

export default class Cl_mProducto {
    private _nombre: string = "";
    private _cantidad: number = 0;
    private _precio: number = 0;
    private _envio: string = "";

    constructor({
        nombre,
        cantidad,
        precio,
        envio
    }: {
        nombre: string;
        cantidad: number;
        precio: number;
        envio: string;
    }) {
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._precio = precio;
        this._envio = envio;
    }

    set nombre(nombre: string) {
        this._nombre = nombre.trim().toLocaleUpperCase();
    }

    get nombre(): string {
        return this._nombre;
    }

    set cantidad(cantidad: number) {
        this._cantidad = +cantidad;
    }

    get cantidad(): number {
        return this._cantidad;
    }

    set precio(precio: number) {
        this._precio = +precio;
    }

    get precio(): number {
        return this._precio;
    }

    set envio(envio: string) {
        this._envio = envio.trim().toLocaleUpperCase();
    }

    get envio(): string {
        return this._envio;
    }

    error() : string | false {
        if (this.envio !== "SI" && this.envio !== "NO") {
            return 'El envio debe ser "Si" o "No"';
        }
        return false;
    } 

    toJSON(): iProducto {
        return {
            nombre: this.nombre,
            cantidad: this.cantidad,
            precio: this.precio,
            envio: this.envio,
        };
    }
}
