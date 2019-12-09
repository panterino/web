import React from 'react'
import './Inicio.css'
import QuienesSomos from "./QuienesSomos"

class Inicio extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="banner flex">
                    <div>
                        <div className="banner-imagen">
                            <img src="https://raw.githubusercontent.com/panterino/Recursos-Panterino/master/Imagenes/logos/panterino-logo.png"
                                alt="Logo Panterino">
                            </img>
                        </div>
                        <div className="banner-texto">
                            <h2>Una organización que promueve la creación y uso de software de código abierto.</h2>
                        </div>
                        <div>
                            <a href="#QuienesSomos">Leer más</a><span className="a-span">›</span>
                        </div>
                    </div>
                </div>
                <QuienesSomos/>
            </React.Fragment>
        )
    }
}

export default Inicio;