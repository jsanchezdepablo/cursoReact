import React from "react";
import "./App.css";

class App extends React.Component {
  render() {

    let empleado = {
      nombre: "Jesús",
      edad: "189"
    }

    return(
      <div>
        <h1>WHAT</h1>
        <p>Hola {empleado.nombre}, tienes {empleado.edad} años </p>
      </div>
    );
  }
}

export default App; //Exportamos la clase, la cual sera el componente App
