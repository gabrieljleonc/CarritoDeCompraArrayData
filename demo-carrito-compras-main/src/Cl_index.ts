import Cl_controlador from "./Cl_controlador.js";
import Cl_mProducto, { iProducto } from "./Cl_mProducto.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vTienda from "./Cl_vTienda.js";
import {dataProducto} from "./data/dataProducto.js";

export default class Cl_index {
    public modelo: Cl_mTienda;
    public vista: Cl_vTienda;

    constructor() {
        this.modelo = new Cl_mTienda();

        let productosLS = localStorage.getItem("productos");
        if (productosLS) {
            let productosDT = JSON.parse(productosLS);
            productosDT.forEach((producto: iProducto) => {
                this.modelo.agregarProducto({
                    producto: new Cl_mProducto(producto),
                    callback: (error: string | false) => {},
                });
            });
        }

        this.vista = new Cl_vTienda();
        let controlador = new Cl_controlador(this.modelo, this.vista);
        this.vista.controlador = controlador;

        dataProducto.forEach((productoData: iProducto) => {
            this.modelo.agregarProducto({
                producto: new Cl_mProducto(productoData),
                callback: (error: string | false) => {
                    console.log(error);
                },
            });
        });

        this.vista.refresh();
    }
}
