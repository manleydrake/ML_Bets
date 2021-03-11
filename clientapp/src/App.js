import './App.css';
import {Test} from './Test'
import Header from './Components/Navigation'
import React,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default class  App extends Component {
  render(){
  return (
          <div className="App">
              <h1>Hello Home</h1>
          </div>
    
    
  );
  }
}

