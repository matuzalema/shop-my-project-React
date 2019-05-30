import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './src/modules/App/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute
     getComponent={(nextState, cb) => {
       require.ensure([], require => {
         cb(null, require('./src/modules/Home/Home.layout.js').default);
       });
     }}
     />
     <Route path="FAQ"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./src/modules/FAQ/FAQ.layout.js').default);
        });
      }}
      />
      <Route path="contact"
       getComponent={(nextState, cb) => {
         require.ensure([], require => {
           cb(null, require('./src/modules/Contact/Contact.layout.js').default);
         });
       }}
       />
      <Route path="rules"
       getComponent={(nextState, cb) => {
         require.ensure([], require => {
           cb(null, require('./src/modules/Rules/Rules.layout.js').default);
         });
       }}
       />
       <Route path="instruction"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Instruction/Instruction.layout.js').default);
          });
        }}
        />
  </Route>
);
