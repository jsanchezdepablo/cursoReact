import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return React.createElement(
      "h1", //Etiqueta
      { id: "titulo", className: "encabezado" }, //Atributos
      "Hola mundo" //Contenido
    );
  }
}

export default App;
