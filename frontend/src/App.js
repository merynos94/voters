import React from 'react';
import logo from './logo.png';
import './App.css';
// import { AboutSection } from './components/about-section/about-section.jsx';
// import { ContactSection } from './components/contact-section/contact-section';
// import { FaqSection } from './components/faq-section/faq-section';
// import { LoginMenu } from './components/login-menu/login-menu';
// import { SiteMenu } from './components/site-menu/site-menu';

function App() {
  return (
    <div className="background-resolution">
      <header className="App-logo">
        <img src={logo} className="logo-space" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacty
        </a>


<div class="main" id="section1">
<h2>Section 1</h2>
<p>Click on the link to see the "smooth" scrolling effect.</p>

<p>Note: Remove the scroll-behavior property to remove smooth scrolling.</p>
</div>

<div class="main" id="section2">
<h2>Section 2</h2>
<a href="#section2">Click Me to Smooth Scroll to Section 1 Above</a>
</div>

<div class="main" id="section3">
<h2>Section 2</h2>
<a href="#section3">Click Me to Smooth Scroll to Section 1 Above</a>
</div>
</header>
    </div>
  );
}

export default App;


