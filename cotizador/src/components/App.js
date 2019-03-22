import React, { Component } from 'react';
import Header from "./Header";
import Formulario from "./Formulario";

class App extends Component {

    recibirDatosForm = (datos) =>{
        console.log(datos);
    }

    render() {
        let titulo = "Cotizador de Seguro de Auto";
        return (
            <div className="contenedor">
                <Header
                    titulo = {titulo}
                />

                <div className="contenedor-formulario">
                    {/*Recibir datos del componente para usarlos en otros componentes*/}
                    <Formulario
                        datosForm = {this.recibirDatosForm}
                    />
                </div>

            </div>
        );
    }
}

export default App;
