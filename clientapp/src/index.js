import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Navigation';
import {Test} from './Test';
import {Stats} from './Components/Stats';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Stats" component={Stats} />
        <Route path="/Odds" component={Test} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
