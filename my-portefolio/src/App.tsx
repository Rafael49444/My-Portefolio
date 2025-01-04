import React from 'react';
import './App.css';
import './components/Navbar.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container" id="about">
        <img src="me.jpg" alt="me" />
        <div className="text-container mx-auto">
          <h2>Rafael Martins</h2>
          <p>
            Hello there! I'm Rafael, a computer engineering student at the ISEL - Instituto Superior de Engenharia de Lisboa.
            I'm passionate about many different technologies such as web development, mobile development and cloud computing. 
            This website is developed using skills of React, TypeScript, HTML, CSS and Bootstrap.
            Besides technology I'm also interested in sports and language learning (currently learning French).
            I also have experience in non tech areas such as customer service through my work and volunteering experiences.
          </p>
        </div>
        <div className="social-container">
          <a href="https://www.linkedin.com/in/rafael-martins-42b9712ab/">
            <img src="icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Rafael49444">
          <img src="icons/github.png" alt="LinkedIn" />
          </a>
          <a href="mailto:rafaelelawar@gmail.com">
            <img src="icons/gmail.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
      <br></br>
      <Projects />
      <br></br>
      <Skills />
      <footer class="footer">
        <img src="copyright.png" alt="Copyright" /> <em>2025 - Rafael Martins</em> 
      </footer>
    </div>
  );
}

export default App;
