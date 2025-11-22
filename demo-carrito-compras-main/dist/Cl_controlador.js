import Cl_mProducto from "./Cl_mProducto.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarProducto({ productoData, callback, }) {
        this.modelo.agregarProducto({
            producto: new Cl_mProducto(productoData),
            callback: (error) => {
                callback(error);
            },
        });
    }
    listarProductos() {
        return this.modelo.listarProductos();
    }
}
