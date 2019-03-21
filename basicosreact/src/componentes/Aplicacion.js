import React from "react";
import Productos from "./Productos";
import Footer from "./Footer";
import Header from "./Header";
import { setTimeout } from "timers";

class Aplicacion extends React.Component{

    constructor(props){
        super();
        this.state = {
            productos: []
        }
    }
    
    // Se suele usar para llamadas a APIs
    componentDidMount(){ 
        const producto = [
            {nombre:"Libro", precio: 300},
            {nombre:"Juguete sexual", precio: 1},
            {nombre:"Manzana", precio: 2},
            {nombre:"Juego playstation 4", precio: 1000}
        ];
        //Simulamos una llamada a una API mediante el timeout
        setTimeout(() =>{
            this.setState({
                productos: producto
            })
        },3000);
    }

    render(){ //Este metodo siempre es obligatorio
        return(
            <div>
                <Header
                    titulo = "Nuestra tienda Virtual"
                />
                <Productos
                    productos = {this.state.productos}    
                />
                <Footer/>
            </div>
        )
    }
}

export default Aplicacion;