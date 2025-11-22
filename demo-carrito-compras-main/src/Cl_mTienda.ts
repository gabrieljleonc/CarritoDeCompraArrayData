import Cl_mProducto, {iProducto} from "./Cl_mProducto.js";

export default class Cl_mTienda {
    private productos: Cl_mProducto[] = [];

    agregarProducto({
        producto,
        callback,
    }: {
        producto: Cl_mProducto;
        callback: (error: string | false) => void;
    }): void {

        const nombre = this.productos.find(
            (d) => d.nombre === producto.nombre
        );
        if (nombre) {
            callback("El producto ya existe");
            return;
        }

        if (producto.error()) {
            callback(`${producto.error()}`);
            return;
        }

        this.productos.push(producto);
        localStorage.setItem("productos", JSON.stringify(this.listarProductos()));
        callback(false);
    }

    listarProductos(): iProducto[] {
        let productos: iProducto[] = [];
        this.productos.forEach((d) => {
            productos.push(d.toJSON());
        });
        return productos;
    }
}
