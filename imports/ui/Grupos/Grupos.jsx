import React, { Component } from "react";
import Grupo from "../Grupo/Grupo";
import "./GruposPantallaGrande.css";
import "./Grupos.css";

class Grupos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grupos: [
        {
          id: 1,
          nombre: "Moviles",
          selected: true
        },
        {
          id: 2,
          nombre: "Web",
          selected: false
        }
      ]
    };
  }
  render() {
    return (
      <div className="fijo escondido">
        <h3>Grupos</h3>
        {this.state.grupos.map(grupo => (
          <Grupo key={grupo.id} grupo={grupo} />
        ))}
      </div>
    );
  }
}

export default Grupos;
