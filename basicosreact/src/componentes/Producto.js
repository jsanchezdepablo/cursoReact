import React from "react";

class Producto extends React.Component{

    render(){ //Este metodo siempre es obligatorio
        let {nombre, precio} = this.props.producto; //Destructuring
        return(
          <React.Fragment>
            <p>El producto {this.props.valor}: <b>{nombre}</b></p>
            <p>Tiene un precio de: <b>{precio}€</b></p>
            <br></br>
          </React.Fragment>
        );
    }
}

export default Producto;