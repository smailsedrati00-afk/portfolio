import { useRef, useState } from "react";
import Contact from "./pages/contact";
// import imageabout from "./images/ismail.png";
import Services from "./pages/services";
import About from "./pages/about";
import Skilss from "./pages/skilss";
import Projects from "./pages/projects";
import Footer from "./pages/footer";
import useScrollAnimation from "./useScrollAnimation";

function App() {
  const siteRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useScrollAnimation(siteRef);

  return (
    <div className="site" ref={siteRef}>
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Ismail home">
          <div className="brand-text logo">
            <span className="brand-name"><img src="/favicon.png" alt="Ismail Sedrati" /></span>
            <small>MODERN PORTFOLIO</small>
          </ div>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`nav-links${isMenuOpen ? " is-open" : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          LET'S TALK ↗
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="live-dot" /> HELLO, I'M
            </p>

            <h1>
              <span>ISMAIL</span>
              <span className="orange">SEDRATI</span>
            </h1>

            <h2>Full Stack Developer.</h2>

            <div className="hero-code">
              <span>01</span> const developer = {"{"}
              <br />
              <span>02</span> &nbsp; name: "Ismail",
              <br />
              <span>03</span> &nbsp; role: "Web Developer",
              <br />
              <span>04</span> &nbsp; passion: "Creating",
              <br />
              <span>05</span> {"}"}
            </div>
          </div>

          <div className="hero-side">
            <p className="intro-kicker">01 INTRODUCTION</p>

            <h3>
              I turn ideas <span className="orange">into digital</span> experiences.
            </h3>

            <p className="hero-description">
              I build modern websites and digital experiences with clean code,
              creative ideas and attention to detail.
            </p>

            <div className="hero-buttons">
              <a className="button button-orange" href="#projects">
                VIEW MY WORK ↗
              </a>
              <a className="button button-outline" href="#contact">
                CONTACT ME ↗
              </a>
            </div>

            <p className="social-line">
              FIND ME ON
              <a href="https://github.com/smailsedrati00-afk" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/ismail-sedrati-01a0b6352/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </p>
          </div>
        </section>

        <div className="hero-highlights" aria-label="Areas of focus">
          <div>
            <strong># 01</strong>
            <span>WEB DEVELOPMENT</span>
          </div>
          <div>
            <strong># 02</strong>
            <span>UI / UX DESIGN</span>
          </div>
          <div>
            <strong># 03</strong>
            <span>CREATIVE PROJECTS</span>
          </div>
          <div>
            <strong># 04</strong>
            <span>CONTINUOUS LEARNING</span>
          </div>
        </div>

        <About />

        <Services />

        <Skilss />
       


        <Projects limit={3} />

        <section className="stats section">
          <div>
            <strong>
              08<span>+</span>
            </strong>
            <p>TECHNOLOGIES</p>
          </div>

          <div>
            <strong>
              03<span>+</span>
            </strong>
            <p>PROJECT CONCEPTS</p>
          </div>

          <div>
            <strong>
              100<span>%</span>
            </strong>
            <p>PASSION TO LEARN</p>
          </div>

          <div>
            <strong>
              01<span>+</span>
            </strong>
            <p>GOAL: YOUR TEAM</p>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
