import React, { Component } from "react";
import AyudaList from "./AyudaList/AyudaList";
import MisTareas from "./MisTareasList/MisTareasList";
import Grupos from "./Grupos/Grupos";
import GruposEscondido from "./GruposEscondido/GruposEscondido";
import NavBar from "./NavBar/NavBar";
import "./App.css";

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            {this.state.menuOpen && (
              <React.Fragment>
                <div className="col-6 col-sm-3 col-md-3 navBarGrupos">
                  <GruposEscondido />
                </div>
                <div className="col-6 col-sm-9 col-md-9 noPadding">
                  <NavBar hamburgerClick={this.hamburgerClick} />
                  <AyudaList />
                  <MisTareas />
                </div>
              </React.Fragment>
            )}
            {!this.state.menuOpen && (
              <React.Fragment>
                <div className="col-0 col-sm-3 col-md-3 navBarGrupos">
                  <Grupos />
                </div>
                <div className="col-12 col-sm-9 col-md-9 noPadding">
                  <NavBar hamburgerClick={this.hamburgerClick} />
                  <AyudaList />
                  <MisTareas />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }

  hamburgerClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
}

export default App2;
