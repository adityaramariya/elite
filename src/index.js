import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import EliteRoute from './EliteRoute';



ReactDOM.render(
  <BrowserRouter>
      <Route component={EliteRoute} />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
