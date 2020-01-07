import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Inicio from '../paginas/Inicio';
import Proyectos from '../paginas/Proyectos';
import Contribuir from '../paginas/Contribuir';

const Rutas = () => (
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/proyectos" component={Proyectos} />
        <Route path="/contribuir" component={Contribuir} />
        <Route component={() => (<div className="flex not-found"><h2>Error 404, página no encontrada</h2> </div>)} />
      </Switch>
)

export default Rutas;