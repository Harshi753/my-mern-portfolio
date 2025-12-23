import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { getProjects } from '../utils/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  return (
    <section id="projects" style={styles.projects}>
      <div style={styles.container}>
        <h2 style={styles.title}>My Projects</h2>
        
        {loading ? (
          <p style={styles.loading}>Loading projects...</p>
        ) : (
          <div style={styles.grid}>
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const styles = {
  projects: {
    padding: '5rem 0',
    background: '#1e293b',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  loading: {
    textAlign: 'center',
    color: '#cbd5e1',
    fontSize: '1.2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '2rem',
  }
};

export default Projects;