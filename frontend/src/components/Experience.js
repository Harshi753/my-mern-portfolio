import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'MERN Stack Developer',
      company: 'The Entrepreneurship Network',
      duration: 'December 2025 - March 2026 (3 months Expected )',
      type: 'Internship',
      location: 'Remote',
      description: 'Working on real-world projects and gaining hands-on experience in full-stack development using the MERN stack. Contributing to live applications and implementing modern web development practices.',
      responsibilities: [
        'Developing full-stack web applications using MongoDB, Express.js, React, and Node.js',
        'Building RESTful APIs and integrating frontend with backend services',
        'Collaborating with the development team on real-world client projects',
        'Implementing responsive UI designs and ensuring cross-browser compatibility',
        'Working with databases, API integration, and deployment processes',
        'Participating in code reviews and following industry best practices'
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST API', 'Git'],
      color: '#6366f1'
    }
  ];

  return (
    <section id="experience" style={styles.experience}>
      <div style={styles.container}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={styles.title}
        >
          Experience
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={styles.subtitle}
        >
          Professional work experience and internships
        </motion.p>

        <div style={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={styles.experienceCard}
            >
              <div style={styles.cardHeader}>
                <div style={{
                  ...styles.iconContainer,
                  background: `${exp.color}20`,
                  border: `2px solid ${exp.color}`
                }}>
                  <FaBriefcase style={{ ...styles.icon, color: exp.color }} />
                </div>
                
                <div style={styles.headerContent}>
                  <div style={styles.topRow}>
                    <h3 style={styles.role}>{exp.role}</h3>
                    <span style={{
                      ...styles.badge,
                      background: `${exp.color}20`,
                      color: exp.color
                    }}>
                      {exp.type}
                    </span>
                  </div>
                  <h4 style={styles.company}>{exp.company}</h4>
                  
                  <div style={styles.metaInfo}>
                    <span style={styles.metaItem}>
                      <FaCalendar style={styles.metaIcon} />
                      {exp.duration}
                    </span>
                    <span style={styles.metaItem}>
                      <FaMapMarkerAlt style={styles.metaIcon} />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <p style={styles.description}>{exp.description}</p>

              <div style={styles.responsibilitiesSection}>
                <h5 style={styles.sectionTitle}>
                  <FaCode style={styles.sectionIcon} />
                  Key Responsibilities & Learnings
                </h5>
                <ul style={styles.responsibilitiesList}>
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      style={styles.responsibilityItem}
                    >
                      <span style={styles.bullet}>▹</span>
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div style={styles.techSection}>
                <h5 style={styles.techTitle}>Technologies Used:</h5>
                <div style={styles.techTags}>
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} style={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  experience: {
    padding: '5rem 0',
    background: '#0f172a',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px',
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
  },
  timeline: {
    position: 'relative',
  },
  experienceCard: {
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    padding: '2.5rem',
    borderRadius: '20px',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
    marginBottom: '2rem',
  },
  cardHeader: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '1.5rem',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: '70px',
    height: '70px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  icon: {
    fontSize: '2rem',
  },
  headerContent: {
    flex: 1,
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '0.5rem',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  role: {
    fontSize: '1.8rem',
    color: '#f8fafc',
    fontWeight: 700,
    margin: 0,
  },
  badge: {
    padding: '0.4rem 1rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: 600,
  },
  company: {
    fontSize: '1.3rem',
    color: '#94a3b8',
    fontWeight: 600,
    margin: '0.5rem 0',
  },
  metaInfo: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    marginTop: '0.8rem',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#cbd5e1',
    fontSize: '0.95rem',
  },
  metaIcon: {
    color: '#6366f1',
  },
  description: {
    color: '#cbd5e1',
    fontSize: '1.05rem',
    lineHeight: '1.8',
    marginBottom: '2rem',
    textAlign: 'justify',
  },
  responsibilitiesSection: {
    marginBottom: '2rem',
  },
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#f8fafc',
    fontSize: '1.2rem',
    marginBottom: '1rem',
    fontWeight: 600,
  },
  sectionIcon: {
    color: '#6366f1',
  },
  responsibilitiesList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  responsibilityItem: {
    display: 'flex',
    gap: '0.8rem',
    color: '#cbd5e1',
    fontSize: '1rem',
    lineHeight: '1.8',
    marginBottom: '0.8rem',
    paddingLeft: '0.5rem',
  },
  bullet: {
    color: '#6366f1',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    flexShrink: 0,
  },
  techSection: {
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid rgba(99, 102, 241, 0.2)',
  },
  techTitle: {
    color: '#f8fafc',
    fontSize: '1rem',
    marginBottom: '1rem',
    fontWeight: 600,
  },
  techTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
  },
  techTag: {
    background: 'rgba(99, 102, 241, 0.15)',
    color: '#818cf8',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    fontWeight: 500,
  }
};

export default Experience;