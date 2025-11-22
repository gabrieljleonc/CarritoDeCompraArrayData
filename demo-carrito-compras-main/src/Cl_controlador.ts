import Cl_mProducto, { iProducto } from "./Cl_mProducto.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vTienda from "./Cl_vTienda.js";

export default class Cl_controlador {
    public modelo: Cl_mTienda;
    public vista: Cl_vTienda;

    constructor(modelo: Cl_mTienda, vista: Cl_vTienda) {
        this.modelo = modelo;
        this.vista = vista;
    }

    agregarProducto({
        productoData,
        callback,
    }: {
        productoData: iProducto;
        callback: Function;
    }): void {
        this.modelo.agregarProducto({
            producto: new Cl_mProducto(productoData),
            callback: (error: string | false) => {
                callback(error);
            },
        });
    }

    listarProductos(): iProducto[] {
        return this.modelo.listarProductos();
    }
}