import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Search from "./Search";
import DetailPage from "./screens/DetailPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Search} />
          <Route exact path="/detail/:id" component={DetailPage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
