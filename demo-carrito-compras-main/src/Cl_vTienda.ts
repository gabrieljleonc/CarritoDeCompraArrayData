import { iProducto } from "./Cl_mProducto.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";

export default class Cl_vTienda extends Cl_vGeneral {
    private btAgregarProducto: HTMLButtonElement;
    private divProductosRegistrados: HTMLDivElement;

    constructor() {
        super({ formName: "carrito" });
        this.btAgregarProducto = this.crearHTMLButtonElement("btAgregarProducto", {
            onclick: () => this.agregarProducto(),
        });
        this.divProductosRegistrados = this.crearHTMLElement("divProductosRegistrados", {
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarProductosIngresados(),
        }) as HTMLDivElement;
    }

    mostrarProductosIngresados() { 
        this.divProductosRegistrados.innerHTML = "";
        let productos = this.controlador?.listarProductos();
        if(!productos) return;
        productos.forEach((productos: iProducto) => {
            this.divProductosRegistrados.innerHTML += `<tr>
                <td>${productos.nombre.toLocaleUpperCase()}</td>
                <td>${productos.cantidad}</td>
                <td>${productos.precio}$</td>
                <td>${productos.envio.toLocaleUpperCase()}</td>
            </tr>`;
        })
    }

    agregarProducto() {
        let nombre = prompt("Ingrese el nombre del producto:");
        if(!nombre) return;
        let cantidad = parseInt(prompt("Ingrese la cantidad:") || "0");
        if(!cantidad) return;
        let precio = parseFloat(prompt("Ingrese el precio:") || "0");
        if(!precio) return;
        let envio = prompt("Ingrese el envio:")?.toLocaleUpperCase();
        if(!envio) return;
        this.controlador!.agregarProducto({
            productoData: {
                nombre: nombre,
                cantidad: cantidad,
                precio: precio,
                envio: envio,
            },
            callback: (error: string | false) => {
                if(error) alert(error);
                this.refresh();
            },
        })
    }
}