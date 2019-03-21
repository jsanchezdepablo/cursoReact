import React, { Component } from 'react';
import Header from "./Header";
import Formulario from "./Formulario";

class App extends Component {
    render() {
        let titulo = "Cotizador de Seguro de Auto";
        return (
            <div className="contenedor">
                <Header
                    titulo = {titulo}
                />

                <div className="contenedor-formulario">
                    <Formulario/>
                </div>

            </div>
        );
    }
}

export default App;
