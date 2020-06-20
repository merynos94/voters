import React, { Component } from "react";
import "./App.css";
import Section from "./Section";
import Structure from './structure';
import Introduction from "./introduction";
import Conclusion from "./conclusion";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Section
            title="Introduction"
            subtitle={<Introduction />}
            dark={true}
            id="section1"
          />
        </div>
        <Section
          title="Structure"
          subtitle={<Structure />}
          dark={true}
          id="section2"
        />
        <Section
          title="Conclusion"
          subtitle={<Conclusion />}
          dark={true}
          id="section3"
        />

      </div>

    );
  }
}
export default Main;