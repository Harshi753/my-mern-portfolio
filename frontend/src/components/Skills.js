import React from 'react';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiJavascript } from 'react-icons/si';
import { SiPython, SiPytorch } from 'react-icons/si';
import { FaBrain } from 'react-icons/fa';
const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNode />, color: '#339933' },
    { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Python', icon: <SiPython />, color: '#3776AB' },
    { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C' },
    { name: 'NLP', icon: <FaBrain />, color: '#FF6B6B' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' }
  ];

  return (
    <section id="skills" style={styles.skills}>
      <div style={styles.container}>
        <h2 style={styles.title}>My Skills</h2>
        
        <div style={styles.grid}>
          {skills.map((skill, index) => (
            <div key={skill.name} style={{...styles.card, borderColor: skill.color}}>
              <div style={{...styles.icon, color: skill.color}}>{skill.icon}</div>
              <h3 style={styles.skillName}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  skills: {
    padding: '5rem 0',
    background: '#0f172a',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  card: {
    background: '#1e293b',
    padding: '2rem',
    borderRadius: '12px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  skillName: {
    fontSize: '1.1rem',
    color: '#f8fafc',
  }
};

export default Skills;