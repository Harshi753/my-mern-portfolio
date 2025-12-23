import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Portfolio</h1>
        
        <div style={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul style={isOpen ? {...styles.navMenu, ...styles.navMenuActive} : styles.navMenu}>
          <li style={styles.navItem}>
            <a onClick={() => scrollToSection('home')} style={styles.navLink}>Home</a>
          </li>
          <li style={styles.navItem}>
            <a onClick={() => scrollToSection('about')} style={styles.navLink}>About</a>
          </li>
          <li style={styles.navItem}>
            <a onClick={() => scrollToSection('contact')} style={styles.navLink}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    background: 'rgba(15, 23, 42, 0.95)',
    padding: '1rem 0',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navMenu: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
  menuIcon: {
    display: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#f8fafc',
  }
};

export default Navbar;