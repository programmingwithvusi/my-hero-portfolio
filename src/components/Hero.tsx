import React from 'react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import '../styles/Hero.css';
import heroImage from '../assets/portrait.jpg';
import brochure from '../assets/Vusi_Dhlamini_CV.pdf';

const Hero: React.FC = () => {
  // Apply fade-in to skills and stats
  useFadeInOnScroll('.skill, .stat');

  return (
    <section className="hero">
      <div className="hero-left">
        <img src={heroImage} alt="Vusi Dhlamini" className="portrait" />
      </div>

      <div className="hero-right">
        <h1>Vusi Dhlamini</h1>
        <h2>Test Analyst & Full‑Stack Developer</h2>
        <p className="tagline">
          Driving Quality, Innovation, and SaaS Modernisation
        </p>

        <div className="skills">
          <div className="skill">
            🧩 Testing Expertise: Architecture Validation · Business Object QA ·
            Crystal Reports · Wyn Enterprise
          </div>
          <div className="skill">
            💻 Development Stack: .NET 8 · React · TypeScript · SQL · Docker ·
            Cordova
          </div>
          <div className="skill">
            ⚙️ Automation & DevOps: Jenkins Pipelines · SaaS Transition ·
            Playwright · CI/CD
          </div>
        </div>

        <div className="cta">
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>
          <a
            href={brochure}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My CV
          </a>
        </div>

        <div className="stats">
          <div className="stat">
            <strong>10+</strong>
            <span>Years Experience</span>
          </div>
          <div className="stat">
            <strong>46.6%</strong>
            <span>Defect Identification Rate</span>
          </div>
          <div className="stat">
            <strong>4</strong>
            <span>SYSPRO Generations Tested</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
