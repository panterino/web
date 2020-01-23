import React from 'react'
import './QuienesSomos.css'

class QuienesSomos extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="container p-t-4" id='QuienesSomos'>
                <h2 className="center title-section m-b-1">Quiénes somos</h2>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://raw.githubusercontent.com/panterino/Recursos-Panterino/master/Imagenes/informacion.png"
                            alt="Información"></img>
                        </div>
                        <div className="card-content">
                            <div className="card-title">
                                <h3>Panterino</h3>
                            </div>
                            <div className="card-text">
                            Somos una organización que promueve, crea y da a conocer proyectos de código abierto que son de gran utilidad para el público al que van dirigidos.
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src="https://raw.githubusercontent.com/panterino/Recursos-Panterino/master/Imagenes/pilar.png"
                            alt="Información"></img>
                        </div>
                        <div className="card-content">
                            <div className="card-title">
                                <h3>Historia</h3>
                            </div>
                            <div className="card-text">
                            Un proyecto empezado de forma oficial el 13 de septiembre de 2019 debido a la plataforma Jaguar que fue fundada por la organización meses antes y presentada a la par de la organización. Fundada originalmente por 5 programadores, 4 estudiantes técnicos y un ingeniero.
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default QuienesSomos;