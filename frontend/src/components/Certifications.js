import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      icon: '📊',
      title: 'IBM SkillsBuild Internship',
      description: 'Completed comprehensive data analytics internship covering data analysis, visualization, and business insights.',
      color: '#0F62FE'
    },
    {
      icon: '📈',
      title: 'Data Visualisation',
      description: 'Learned to create impactful data visualizations and derive actionable business insights through TATA Forage program.',
      color: '#FFE66D'
    },
    {
      icon: '💻',
      title: 'MERN Stack Development',
      description: 'Comprehensive training in MongoDB, Express.js, React, and Node.js under Next Gen Employability Program.',
      color: '#10B981'
    },
    {
      icon: '⚡',
      title: 'Technology Job Simulation',
      description: 'Hands-on simulation in software development, coding best practices, and real-world problem solving from Deloitte.',
      color: '#86BC25'
    },
    {
      icon: '🤖',
      title: 'Claude with Anthropic API',
      description: 'Learned to integrate and utilize Claude AI API for building intelligent applications and automation.',
      color: '#D97706'
    }
  ];

  return (
    <section id="certifications" style={styles.certifications}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          My Certifications
        </h2>
        
        <p style={styles.subtitle}>
          Professional certifications and specialized training programs
        </p>

        <div style={styles.grid}>
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              style={{...styles.card, borderColor: cert.color}}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{...styles.iconContainer, background: `${cert.color}20`}}>
                <div style={styles.icon}>
                  {cert.icon}
                </div>
              </div>
              <h3 style={styles.certTitle}>{cert.title}</h3>
              <p style={styles.description}>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  certifications: {
    padding: '5rem 0',
    background: '#1e293b',
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
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 700,
  },
  subtitle: {
    textAlign: 'center',
    color: '#cbd5e1',
    fontSize: '1.1rem',
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  card: {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    padding: '2.5rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    border: '2px solid',
    borderColor: 'transparent',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  },
  iconContainer: {
    width: '100px',
    height: '100px',
    margin: '0 auto 1.5rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',
  },
  icon: {
    fontSize: '3rem',
  },
  certTitle: {
    fontSize: '1.5rem',
    color: '#f8fafc',
    marginBottom: '1rem',
    fontWeight: 600,
  },
  description: {
    color: '#cbd5e1',
    lineHeight: '1.8',
    fontSize: '1rem',
  }
};

export default Certifications;