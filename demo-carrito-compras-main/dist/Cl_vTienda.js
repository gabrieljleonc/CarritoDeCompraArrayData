import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vTienda extends Cl_vGeneral {
    constructor() {
        super({ formName: "carrito" });
        this.btAgregarProducto = this.crearHTMLButtonElement("btAgregarProducto", {
            onclick: () => this.agregarProducto(),
        });
        this.divProductosRegistrados = this.crearHTMLElement("divProductosRegistrados", {
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarProductosIngresados(),
        });
    }
    mostrarProductosIngresados() {
        var _a;
        this.divProductosRegistrados.innerHTML = "";
        let productos = (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.listarProductos();
        if (!productos)
            return;
        productos.forEach((productos) => {
            this.divProductosRegistrados.innerHTML += `<tr>
                <td>${productos.nombre.toLocaleUpperCase()}</td>
                <td>${productos.cantidad}</td>
                <td>${productos.precio}$</td>
                <td>${productos.envio.toLocaleUpperCase()}</td>
            </tr>`;
        });
    }
    agregarProducto() {
        var _a;
        let nombre = prompt("Ingrese el nombre del producto:");
        if (!nombre)
            return;
        let cantidad = parseInt(prompt("Ingrese la cantidad:") || "0");
        if (!cantidad)
            return;
        let precio = parseFloat(prompt("Ingrese el precio:") || "0");
        if (!precio)
            return;
        let envio = (_a = prompt("Ingrese el envio:")) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase();
        if (!envio)
            return;
        this.controlador.agregarProducto({
            productoData: {
                nombre: nombre,
                cantidad: cantidad,
                precio: precio,
                envio: envio,
            },
            callback: (error) => {
                if (error)
                    alert(error);
                this.refresh();
            },
        });
    }
}
