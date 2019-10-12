import React, { Component } from "react";
import "./Grupo.css";

class Grupo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h5 className="tituloGrupo">{this.props.grupo.nombre}</h5>;
  }
}

export default Grupo;
