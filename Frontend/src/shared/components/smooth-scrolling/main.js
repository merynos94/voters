import React, { Component } from "react";

import "./App.css";
import Navbar from "./Navbar";
import Section from "./Section";
import dummyText from "./DummyText";
import About from './about';

class Main extends Component {
    render() {
      return (
        <div className="App">
          {/* <Navbar /> */}
          <Section
            title="About"
            subtitle={About}
            dark={true}
            id="section1"
          />
          <Section
            title="Faq"
            subtitle={dummyText}
            dark={true}
            id="section2"
          />
          <Section
            title="Contact"
            subtitle={dummyText}
            dark={true}
            id="section3"
          />

        </div>
      );
    }
  }
  export default Main;