import React from "react";
import Producto from "./Producto"

class Productos extends React.Component{

    render(){ //Este metodo siempre es obligatorio
        return(
            <React.Fragment>
                <h2>Listado de Productos</h2>
               {
                    this.props.productos.map((element, key) => {
                        return <Producto
                            key = {key}
                            valor = {key}
                            producto = {this.props.productos[key]}
                        />
                    })
                }
            </React.Fragment>

        );
    }
}

export default Productos;