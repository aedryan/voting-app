import ReactDOM from 'react-dom';
import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import Routes from 'routes';

const history = createBrowserHistory();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Routes history={history} />, 
    document.querySelector('#app')
  );
});