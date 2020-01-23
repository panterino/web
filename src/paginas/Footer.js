import React from "react";
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div class="flex">
            <div>
              Contenido
              <ul>
                <li>Acerca de</li>
                <li>Proyectos</li>
                <li>Contribuir</li>
              </ul>
            </div>
            <div>
              Extra
              <ul>
                <li>
                  <a href="https://www.facebook.com/Panterino.Organizacion/" target="_blank"
                  rel="noopener noreferrer">
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Contacto</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p class="fin">2019 - Panterino</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
