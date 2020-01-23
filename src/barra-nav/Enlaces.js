import React from "react";
import { Link } from "react-router-dom";
import "./BarraNav.css";

class Enlaces extends React.Component {
  render() {
    return (
      <React.Fragment>
            <ul className="ul-enlaces">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/quienes-somos">Quiénes somos</Link>
              </li>
              <li>
                <Link to="/proyectos">Proyectos</Link>
              </li>
              <li>
                <Link to="/contribuir">Contribuir</Link>
              </li>
            </ul>
      </React.Fragment>
    );
  }
}

export default Enlaces;