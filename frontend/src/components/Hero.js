import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>
            Hi, I'm <span style={styles.highlight}>Harshitha</span>
          </h1>
          <h2 style={styles.subtitle}>Full Stack Developer</h2>
          <p style={styles.description}>
            I build amazing web applications using the MERN stack
          </p>
          
          <div style={styles.buttons}>
            <a href="#projects" style={{...styles.btn, ...styles.btnPrimary}}>View Projects</a>
            <a href="#contact" style={{...styles.btn, ...styles.btnSecondary}}>Contact Me</a>
          </div>

          <div style={styles.socialLinks}>
            <a href="https://github.com/Harshi753" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/harshitha-j-patil-60ab50244" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <FaLinkedin />
            </a>
            <a href="mailto:patilharshitha2547@gmail.com" style={styles.socialIcon}>
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6rem 0 2rem',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  content: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    color: '#f8fafc',
  },
  highlight: {
    background: 'linear-gradient(135deg, #6366f1, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '2rem',
    color: '#cbd5e1',
    marginBottom: '1.5rem',
  },
  description: {
    fontSize: '1.2rem',
    color: '#cbd5e1',
    marginBottom: '2.5rem',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
  btn: {
    padding: '12px 30px',
    borderRadius: '8px',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-block',
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    color: 'white',
  },
  btnSecondary: {
    background: 'transparent',
    border: '2px solid #6366f1',
    color: '#6366f1',
  },
  socialLinks: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    fontSize: '1.5rem',
  },
  socialIcon: {
    color: '#cbd5e1',
    transition: 'all 0.3s ease',
  }
};

export default Hero;