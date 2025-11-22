export default class Cl_mProducto {
    constructor({ nombre, cantidad, precio, envio }) {
        this._nombre = "";
        this._cantidad = 0;
        this._precio = 0;
        this._envio = "";
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._precio = precio;
        this._envio = envio;
    }
    set nombre(nombre) {
        this._nombre = nombre.trim().toLocaleUpperCase();
    }
    get nombre() {
        return this._nombre;
    }
    set cantidad(cantidad) {
        this._cantidad = +cantidad;
    }
    get cantidad() {
        return this._cantidad;
    }
    set precio(precio) {
        this._precio = +precio;
    }
    get precio() {
        return this._precio;
    }
    set envio(envio) {
        this._envio = envio.trim().toLocaleUpperCase();
    }
    get envio() {
        return this._envio;
    }
    error() {
        if (this.envio !== "SI" && this.envio !== "NO") {
            return 'El envio debe ser "Si" o "No"';
        }
        return false;
    }
    toJSON() {
        return {
            nombre: this.nombre,
            cantidad: this.cantidad,
            precio: this.precio,
            envio: this.envio,
        };
    }
}
