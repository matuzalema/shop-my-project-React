import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Contact } from "./modules/Contact/Contact.layout.js";
// import { Root } from "./components/Root";
import { Home } from "./components/Home";
// import { User } from "./components/User";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
       
          <Switch>
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/contact"} component={Contact} />
          </Switch>
 
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);