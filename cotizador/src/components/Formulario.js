import React from "react";

class Formulario extends React.Component{

    constructor(props){
        super(props);
        this.marcaRef = React.createRef();
        this.anyoRef = React.createRef();
        this.basicoRef = React.createRef();
        this.completoRef = React.createRef(); 
    }

    cotizarSeguro = (e) =>{
        //Prevenimos el comportamiento por defecto de onSubmit,
        //no recargamos pagina y tampoco pasamos parametros por url.
        e.preventDefault();

        const tipoPlan = this.basicoRef.current.checked ? "basico" : this.completoRef.current.checked ? "completo" : undefined;

        //Construimos un objeto para mandar datos al componente principal
        const infoAuto = {
            marca: this.marcaRef.current.value,
            year: this.anyoRef.current.value,
            plan: tipoPlan
        }

        //Enviar datos al componente principal
        this.props.datosForm(infoAuto);

        //Reset form (opcional)
        //e.currentTarget.reset();

    }

    render(){
        return(
            <form className="cotizar-auto" onSubmit={this.cotizarSeguro.bind(this)}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.anyoRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo" required>
                    <label>Plan:</label>
                    <input type="radio" name="plan" value="basico" ref={this.basicoRef}/> Básico
                    <input type="radio" name="plan" value="completo" ref={this.completoRef}/> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        );
    }
}

export default Formulario;