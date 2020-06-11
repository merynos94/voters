import React from 'react';

// import Directory from '../../components/directory/directory.component';

import './homepage.styles.css';
// import SiteMenu from '../../components/site-menu/site-menud';



const HomePage = () => (
  <div className='homepage'>
      <div id="sidebar">
            <div class="toggle-btn"
            onClick="show()">
                <span></span>
                <span></span>
                <span></span>
                </div>
        <ul>
                <li>Home</li>
                <li>About</li>
                <li>Faq</li>
                <li>Contact</li>
                </ul>
      </div>
      <div class="main" id="section1">
          <p class="about-main-text">Lorem Ipsum</p>
  
  <p class ="About-describe-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
 
</div>

<div class="main" id="section2">
    <div class="linia-create-kopia-2">
    <p class="faq-title" id="first-title">Lorem Ipsum</p>
    <p class="faq-describe" id="first-describe">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <p class="faq-title" id="second-title">Lorem Ipsum</p>
    <p class="faq-describe" id="second-describe">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <p class="faq-title" id="third-title">Lorem Ipsum</p>
    <p class="faq-describe" id ="third-describe">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>s
    

    </div>
  <h2>Section 2</h2>
  <a href="#section2">Click Me to Smooth Scroll to Section 1 Above</a>
</div>

<div class="main" id="section3">
  <h2>Section 2</h2>
  <a href="#section3">Click Me to Smooth Scroll to Section 1 Above</a>
</div>
    {/* <Directory /> */}

    {/* <SiteMenu /> */}
  </div>
);

function show(){

    document.getElementById('sidebar').classList.toggle('active');
}

export default HomePage;