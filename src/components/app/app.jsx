import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "../main/main";
import Card from "../card/card";
import "./app.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route
          path="/:id"
          render={(routeProps) => <Card props={routeProps.match.params.id} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
