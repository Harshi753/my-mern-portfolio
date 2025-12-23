import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={styles.card}
    >
      <div style={styles.imageContainer}>
        <img 
          src={project.imageUrl || 'https://via.placeholder.com/400x250'} 
          alt={project.title}
          style={styles.image}
        />
      </div>
      
      <div style={styles.content}>
        <h3 style={styles.title}>{project.title}</h3>
        <p style={styles.description}>{project.description}</p>
        
        <div style={styles.techContainer}>
          {project.technologies?.map((tech, index) => (
            <span key={index} style={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
        
        <div style={styles.links}>
          {project.githubLink && project.githubLink !== '' ? (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.link}
            >
              <FaGithub /> Code
            </a>
          ) : (
            <span style={styles.comingSoon}>
              <FaGithub /> Code (Coming Soon)
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const styles = {
  card: {
    background: '#0f172a',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    padding: '1.5rem',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: '#f8fafc',
  },
  description: {
    color: '#cbd5e1',
    marginBottom: '1rem',
    lineHeight: '1.6',
  },
  techContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  techTag: {
    background: 'rgba(99, 102, 241, 0.2)',
    color: '#6366f1',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
  },
  links: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#6366f1',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'color 0.3s ease',
  },
  comingSoon: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#94a3b8',
    fontSize: '0.9rem',
    fontStyle: 'italic',
  }
};

export default ProjectCard;
