import React from 'react';
import { FaCakeCandles, FaTv, FaPalette, FaDumbbell } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Hobbies = () => {
  const hobbies = [
    {
      icon: <FaCakeCandles />,
      title: 'Baking',
      description: 'I enjoy experimenting with recipes and baking desserts, which helps me relax and stay creative.',
      color: '#FF6B6B'
    },
    {
      icon: <FaPalette />,
      title: 'Painting',
      description: 'Painting allows me to express creativity visually and improves my focus and patience.',
      color: '#FFE66D'
    },
    {
      icon: <FaTv />,
      title: 'Binge Watching',
      description: 'Watching web series and tech documentaries helps me unwind and gain new perspectives.',
      color: '#4ECDC4'
    },
    {
      icon: <FaDumbbell />,
      title: 'Gym',
      description: 'Regular workouts keep me physically fit, mentally sharp, and boost my productivity.',
      color: '#95E1D3'
    }
  ];

  return (
    <section id="hobbies" style={styles.hobbies}>
      <div style={styles.container}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={styles.title}
        >
          My Hobbies
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={styles.subtitle}
        >
          Beyond coding, here's what I enjoy doing in my free time
        </motion.p>

        <div style={styles.grid}>
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              style={{...styles.card, borderColor: hobby.color}}
            >
              <div style={{...styles.iconContainer, background: `${hobby.color}20`}}>
                <div style={{...styles.icon, color: hobby.color}}>
                  {hobby.icon}
                </div>
              </div>
              <h3 style={styles.hobbyTitle}>{hobby.title}</h3>
              <p style={styles.description}>{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  hobbies: {
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
  hobbyTitle: {
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

export default Hobbies;