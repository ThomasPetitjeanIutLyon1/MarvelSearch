import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Search from "./Search";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Search} />
      </BrowserRouter>
    )
  }
}

export default App;
