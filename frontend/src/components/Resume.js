import React from 'react';
import { FaDownload, FaFileAlt, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Resume = () => {
  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Harsh(R).pdf`;
    link.download = 'Harsh_Resume.pdf'; // Name it will be saved as
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: 'Education',
      description: 'View my academic background and qualifications',
      color: '#6366f1'
    },
    {
      icon: <FaBriefcase />,
      title: 'Experience',
      description: 'Professional experience and internships',
      color: '#8b5cf6'
    },
    {
      icon: <FaAward />,
      title: 'Projects',
      description: 'Technical projects and achievements',
      color: '#ec4899'
    }
  ];

  return (
    <section id="resume" style={styles.resume}>
      <div style={styles.container}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={styles.title}
        >
          Resume
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.mainCard}
        >
          <div style={styles.resumeIcon}>
            <FaFileAlt />
          </div>
          
          <h3 style={styles.cardTitle}>📄 Download My Resume</h3>
          <p style={styles.cardDescription}>
            View my education, technical skills, projects, and internship experience in detail.
          </p>

          <div style={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={styles.highlightItem}
              >
                <div style={{...styles.highlightIcon, color: item.color}}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={styles.highlightTitle}>{item.title}</h4>
                  <p style={styles.highlightDesc}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={handleDownload}
            style={styles.downloadButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload style={styles.buttonIcon} />
            Download Resume
          </motion.button>

          <p style={styles.note}>
            💡 Click the button above to download the PDF version
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  resume: {
    padding: '5rem 0',
    background: '#0f172a',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '900px',
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
  },
  mainCard: {
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    padding: '3rem 2.5rem',
    borderRadius: '24px',
    textAlign: 'center',
    border: '2px solid rgba(99, 102, 241, 0.2)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
  },
  resumeIcon: {
    fontSize: '4rem',
    color: '#6366f1',
    marginBottom: '1.5rem',
  },
  cardTitle: {
    fontSize: '2rem',
    color: '#f8fafc',
    marginBottom: '1rem',
    fontWeight: 700,
  },
  cardDescription: {
    color: '#cbd5e1',
    fontSize: '1.1rem',
    marginBottom: '2.5rem',
    lineHeight: '1.8',
    maxWidth: '600px',
    margin: '0 auto 2.5rem',
  },
  highlightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2.5rem',
    textAlign: 'left',
  },
  highlightItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
    padding: '1rem',
    background: 'rgba(99, 102, 241, 0.05)',
    borderRadius: '12px',
    border: '1px solid rgba(99, 102, 241, 0.1)',
  },
  highlightIcon: {
    fontSize: '1.8rem',
    marginTop: '0.2rem',
  },
  highlightTitle: {
    color: '#f8fafc',
    fontSize: '1.1rem',
    marginBottom: '0.3rem',
    fontWeight: 600,
  },
  highlightDesc: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    lineHeight: '1.5',
  },
  downloadButton: {
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    color: 'white',
    border: 'none',
    padding: '1.2rem 3rem',
    fontSize: '1.1rem',
    fontWeight: 600,
    borderRadius: '50px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.8rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 6px 20px rgba(99, 102, 241, 0.4)',
  },
  buttonIcon: {
    fontSize: '1.2rem',
  },
  note: {
    marginTop: '1.5rem',
    color: '#94a3b8',
    fontSize: '0.9rem',
    fontStyle: 'italic',
  }
};

export default Resume;