import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/css/base/base.css";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
