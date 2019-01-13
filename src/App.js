import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
//import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
      </div>
    );
  }
}

export default App;
