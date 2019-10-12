import React from "react";
import "./ControlGrupo.css";

function ControlGrupo() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  return (
    <React.Fragment>
      <button className="botonControl" onClick={() => setModalShow(true)}>
        Agregar Integrante
      </button>
      <button className="botonControl" onClick={() => setModalShow2(true)}>
        Agregar Tarea
      </button>
    </React.Fragment>
  );
}

export default ControlGrupo;
