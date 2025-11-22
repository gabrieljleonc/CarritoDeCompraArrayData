import Cl_controlador from "./Cl_controlador.js";
import Cl_mProducto from "./Cl_mProducto.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vTienda from "./Cl_vTienda.js";
import { dataProducto } from "./data/dataProducto.js";
export default class Cl_index {
    constructor() {
        this.modelo = new Cl_mTienda();
        let productosLS = localStorage.getItem("productos");
        if (productosLS) {
            let productosDT = JSON.parse(productosLS);
            productosDT.forEach((producto) => {
                this.modelo.agregarProducto({
                    producto: new Cl_mProducto(producto),
                    callback: (error) => { },
                });
            });
        }
        this.vista = new Cl_vTienda();
        let controlador = new Cl_controlador(this.modelo, this.vista);
        this.vista.controlador = controlador;
        dataProducto.forEach((productoData) => {
            this.modelo.agregarProducto({
                producto: new Cl_mProducto(productoData),
                callback: (error) => {
                    console.log(error);
                },
            });
        });
        this.vista.refresh();
    }
}
