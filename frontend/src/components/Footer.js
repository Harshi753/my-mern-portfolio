import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <p style={styles.text}>&copy; 2025 Harshitha. All rights reserved.</p>
          
          <div style={styles.social}>
            <a href="https://github.com/Harshi753" target="_blank" rel="noopener noreferrer" style={styles.link}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/harshitha-j-patil-60ab50244" target="_blank" rel="noopener noreferrer" style={styles.link}>
              <FaLinkedin />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#0f172a',
    padding: '2rem 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#cbd5e1',
  },
  social: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: '#cbd5e1',
    fontSize: '1.5rem',
  }
};

export default Footer;