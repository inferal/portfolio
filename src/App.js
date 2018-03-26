import React, { Component } from "react";
import "./App.css";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "2b76d680bc3d595d0d890976b809fd1d";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Портфолио</h1>
        </header>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
