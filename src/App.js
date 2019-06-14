import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';


import './App.scss';

import { Layout } from './components/Layout/Layout';
import Home from './components/Home/Home';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/home'} component={Home} />
         
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

// import React from "react";
// import { render } from "react-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

// import { Layout } from "./components/Layout/Layout";
// import { Home } from "./components/Home/Home";
// import { Rules } from "./components/Rules/Rules";
// import { FAQ } from "./components/FAQ/FAQ";
// import { Contact } from "./components/Contact/Contact";
// import { NoMatch } from "./components/NoMatch.js";

// class App extends React.Component {
//   render() {
//     return (
//       <BrowserRouter basename="/">
//         <Layout>
//           <Switch>
//             <Route exact path={"/"} component={Home} />
//             <Route exact path={"/FAQ"} component={FAQ} />
//             <Route exact path={"/Rules"} component={Rules} />
//             <Route exact path={"/Contact"} component={Contact} />
//             <Route component={NoMatch} />
//           </Switch>
//         </Layout>
//       </BrowserRouter>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);

// export default App;
