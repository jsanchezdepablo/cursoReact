import React from "react";
import Productos from "./Productos";
import Footer from "./Footer";
import Header from "./Header";

class Aplicacion extends React.Component{
    render(){ //Este metodo siempre es obligatorio

        const productos = [
            {nombre:"Libro", precio: 300},
            {nombre:"Jueguete sexual", precio: 1},
            {nombre:"Manzana", precio: 2},
            {nombre:"Juego playstation 4", precio: 1000}
        ]

        return(
            <div>
                <Header
                
                    titulo = "Nuestra tienda Virtual"
                />
                <Productos
                    productos ={productos}    
                
                />
                <Footer/>
            </div>
        )
    }


}

export default Aplicacion;