import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MainLayout } from "./modules/Main/MainLayout";
import { Home } from "./modules/Home/HomeLayout";
import { Rules } from "./modules/Rules/RulesLayout";
import { FAQ } from "./modules/FAQ/FAQLayout";
import { Contact } from "./modules/Contact/ContactLayout";
import { NoMatch } from "./components/NoMatch.js";

const PRODUCTSsss = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <MainLayout>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/FAQ"} component={FAQ} />
            <Route exact path={"/Rules"} component={Rules} />
            <Route exact path={"/Contact"} component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
