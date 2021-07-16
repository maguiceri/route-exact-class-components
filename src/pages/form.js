import React from "react";
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';

class Form extends React.Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            name:'',
            logo:'',
            mail:'',
            description:'',
            web:'',
            twitter:'',
            instagram:'',
            ok:'',
            showMessage:''
        }    
    }

    handleChange(e) {
        const {name, value} = e.target;

        this.setState({
            [name]:value //hace referencia a la variable que se esta modificando en el momento
        })
    }
    handleClick() {
        const {name, logo, mail, description } = this.state;
        const isValid = name && logo && mail && description ? true : false;

        this.setState({
            ok:isValid,
            showMessage:true
        })
        //if (name && logo && mail && description ) { //chequeo existencia
        //   this.setState({ //Actualizacion de estado
        //        ok: true,
        //        showMessage:'true'
        //    })
        //} else {
        //    this.setState({
        //        ok:false,
        //        showMessage:'true'
         //   })
        //}
    }
    render() {
        const {ok, showMessage} = this.state;
        return(
            <>
            <div>
                < Navbar/>
                {showMessage && (
                    <p>{ok ? "todo salio bien" : "todo salio mal"}</p>
                )}
                <input type="text" name="name" placeholder="nombre" onChange = {(e) => this.handleChange(e)}></input>
                <input type="text" name="logo" placeholder="logo" onChange = {(e) => this.handleChange(e)}></input>
                <input type="text" name="mail" placeholder="mail" onChange = {(e) => this.handleChange(e)}></input>
                <input type="text" name="description" placeholder="description" onChange = {(e) => this.handleChange(e)}></input>
                <input type="text" name="web" placeholder="web" onChange = {(e) => this.handleChange(e)}></input>
                <input type="text" name="twitter" placeholder="twitter" onChange= {(e) => this.handleChange(e)} ></input>
                <input type="text" name="instagram" placeholder="instagram" onChange= {(e) => this.handleChange(e)}></input>
            </div>
            <button onClick = {() => this.handleClick ()}>Enviar</button>
            <Link to="/">
                    <button>volver a la home</button>
            </Link>
            </>
        )
    }
}

export default Form;