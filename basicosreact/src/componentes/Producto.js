import React from "react";

class Producto extends React.Component{

    render(){ //Este metodo siempre es obligatorio
        return(
          <h1>{this.props.producto}</h1>
        );
    }
}

export default Producto;