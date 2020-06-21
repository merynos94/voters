import React, { Component } from "react";
import Structure from './structure';
import Introduction from "./introduction";
import Conclusion from "./conclusion";
import "./App.css";
class Main extends Component {
  render() {
    return (
      <div className="App">
        <div className="section section-dark">
          <div className="section-content" id="section1">
            <h1>Introduction</h1>
            <Introduction />
          </div>
        </div>
        <div className="section section-dark">
          <div className="section-content" id="section2">
            <h1>Structure</h1>
            <Structure />
          </div>
        </div>
        <div className="section section-dark">
          <div className="section-content" id="section3">
            <h1>Conclusion</h1>
            <Conclusion />
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
