import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { submitContact } from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContact(formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" style={styles.contact}>
      <div style={styles.container}>
        <h2 style={styles.title}>Get In Touch</h2>
        
        <div style={styles.content}>
          <div style={styles.info}>
            <h3 style={styles.infoTitle}>Let's talk about everything!</h3>
            <p style={styles.infoPara}>Don't like forms? Send me an email. 👋</p>
            
            <div style={styles.details}>
              <div style={styles.detailItem}>
                <FaEnvelope style={styles.detailIcon} />
                <span style={styles.detailText}>
                  patilharshitha2547@gmail.com
                </span>
              </div>

              <div style={styles.detailItem}>
                <FaMapMarkerAlt style={styles.detailIcon} />
                <span style={styles.detailText}>
                  Bengaluru, India
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            
            <div style={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            
            <div style={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ ...styles.input, ...styles.textarea }}
              ></textarea>
            </div>
            
            <button type="submit" style={styles.button}>
              Send Message
            </button>
            
            {status && <p style={styles.status}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

const styles = {
  contact: {
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
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  info: {},
  infoTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#f8fafc',
  },
  infoPara: {
    color: '#cbd5e1',
    marginBottom: '2rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: '#cbd5e1',
  },
  detailIcon: {
    fontSize: '1.5rem',
    color: '#6366f1',
  },
  detailText: {},
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formGroup: {},
  input: {
    width: '100%',
    padding: '1rem',
    background: '#1e293b',
    border: '2px solid transparent',
    borderRadius: '8px',
    color: '#f8fafc',
    fontSize: '1rem',
  },
  textarea: {
    resize: 'vertical',
  },
  button: {
    padding: '12px 30px',
    borderRadius: '8px',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    color: 'white',
    fontSize: '1rem',
  },
  status: {
    textAlign: 'center',
    padding: '1rem',
    borderRadius: '8px',
    background: 'rgba(34, 197, 94, 0.2)',
    color: '#22c55e',
  }
};

export default Contact;
