import React from "react";
import { Link } from "react-router-dom";
import "./BarraNav.css";

class Navbar extends React.Component {
  state = {
    toggle: false
  }

  Toggle = () => {
      this.setState({toggle:!this.state.toggle})
  }
  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <div className="contenedor-nav index100">
            <i class="material-icons btn-nav" onClick={this.Toggle}>
              menu
            </i>
            <h1 className="titulo">Panterino</h1>
            <ul className={this.state.toggle ? "ul-enlaces nav-activo": "ul-enlaces"} >
              <li>
                <Link to="/" onClick={this.Toggle}>Inicio</Link>
              </li>
              <li>
                <Link to="/proyectos" onClick={this.Toggle}>Proyectos</Link>
              </li>
              <li>
                <Link to="/contribuir" onClick={this.Toggle}>Contribuir</Link>
              </li>
            </ul>
            <div></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
