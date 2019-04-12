import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import City from "./components/city";
import Weather from "./components/weather";

class App extends Component {
  render() {
    return (
      <div className="App">
        <City />
        <Weather />
      </div>
    );
  }
}

export default App;
