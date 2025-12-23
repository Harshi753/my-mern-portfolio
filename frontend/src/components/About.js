import React from 'react';

const About = () => {
  return (
    <section id="about" style={styles.about}>
      <div style={styles.container}>
        <h2 style={styles.title}>About Me</h2>
        
        <div style={styles.content}>
          <div style={styles.text}>
            <p style={styles.paragraph}>
              I'm a passionate Full Stack Developer specializing in the MERN stack. 
              I love creating dynamic, responsive web applications that solve real-world problems.
            </p>
            <p style={styles.paragraph}>
              With expertise in MongoDB, Express.js, React, and Node.js, I build 
              scalable and efficient solutions. I'm constantly learning and staying 
              up-to-date with the latest technologies.
            </p>
            <p style={styles.paragraph}>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  about: {
    padding: '5rem 0',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    width: '100%',
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 700,
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    background: 'rgba(15, 23, 42, 0.5)',
    padding: '3rem',
    borderRadius: '20px',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },
  text: {},
  paragraph: {
    fontSize: '1.15rem',
    color: '#e2e8f0',
    marginBottom: '1.5rem',
    lineHeight: '1.9',
    textAlign: 'justify',
    fontFamily: 'Georgia, "Times New Roman", serif',
    letterSpacing: '0.3px',
  }
};

export default About;