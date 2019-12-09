import React from 'react';
import BarraNav from './barra-nav/BarraNav'
import Rutas from './componentes/Rutas'
import Footer from './paginas/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <BarraNav/>
      <Rutas/>
      <Footer/>
    </div>
  );
}

export default App;
