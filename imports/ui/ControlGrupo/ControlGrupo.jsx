import React, { Component } from "react";
import "./ControlGrupo.css";

class ControlGrupo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <button className="botonControl">Agregar Integrante</button>
        <button className="botonControl">Agregar Tarea</button>
      </React.Fragment>
    );
  }
}

export default ControlGrupo;
