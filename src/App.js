import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">David Hejtmánek - Kontakty</div>
        <div className="nav-links">
          <a href="https://portfolio-davidhejtmanek.vercel.app" target="_blank" rel="noopener noreferrer">
            Main Page
          </a>
          
        </div>
      </header>

      <main>
        <section id="contacts" className="content">
          <h1>Kontakt:</h1>
          <p>Tel: +420 328 381 128</p>
          <p>Email: david07@post.cz</p>
          <p>
            {' '}
            <a href="mailto:david07@post.cz" className="contact-link">
              Napište mi email
            </a>
          </p>
          <p>
            Adresa: Ulice 123, 76001 Zlín, Česká republika
          </p>
          <div className="social-links">
            <a href="https://github.com/Xpq1X" target="_blank" rel="noopener noreferrer">
              <img src="25231.png" alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/david_hejtmaneksr/" target="_blank" rel="noopener noreferrer">
              <img src="Instagram_icon.png" alt="Instagram" />
            </a>
            <a href="https://www.messenger.com/t/david.hejtmanek.1612" target="_blank" rel="noopener noreferrer">
              <img src="facebuk.svg.png" alt="Messenger" />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>David Hejtmánek - Kontakty © 2024</p>
      </footer>
    </div>
  );
}

export default App;
