import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './App.scss';
import { Layout } from './components/Layout/Layout';
import Home from './components/Home/Home';
import {Contact} from './components/Contact/Contact';
import {FAQ} from './components/FAQ/FAQ';
import {Rules} from './components/Rules/Rules';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/home'} component={Home} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/FAQ'} component={FAQ} />
            <Route exact path={'/rules'} component={Rules} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;