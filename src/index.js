import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MainLayout } from "./components/MainLayout";
import { Home } from "./components/Home";
import { User } from "./components/User";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/user"} component={User} />
            <Route exact path={"/FAQ"} component={FAQ} />
            <Route exact path={"/Contact"} component={Contact} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
