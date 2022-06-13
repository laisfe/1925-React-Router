import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/css/base/base.css";
import Cabecalho from "./components/Cabecalho";
import Home from "./paginas/Home";
import Pagina404 from "./paginas/Pagina404";
import Sobre from "./paginas/Sobre";

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
