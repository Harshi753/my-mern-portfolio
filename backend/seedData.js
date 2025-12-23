const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

const projects = [
  
  {
    title: 'AI-Powered Virtual Assistant',
    description: 'Developed an intelligent conversational AI assistant using Natural Language Processing and Large Language Models. The system features speech recognition, intent classification, and context-aware dialogue generation powered by DialoGPT, enabling natural human-like interactions and automated responses.',
    technologies: ['Python', 'Transformers', 'PyTorch', 'DialoGPT', 'ASR', 'NLP'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    githubLink: 'https://github.com/yourusername/ai-virtual-assistant',
    liveLink: '',
    featured: true
  },
  {
    title: 'MERN Stack Portfolio',
    description: 'Developed and deployed a full-stack portfolio application with dynamic project rendering from MongoDB database and functional contact form with email notifications. Implemented responsive design, RESTful APIs, and cloud deployment on Vercel and Render for optimal performance.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Framer Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    githubLink: 'https://github.com/yourusername/mern-portfolio',
    liveLink: '',
    featured: true
  }
  
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB Connected');
    
    // Clear existing projects
    await Project.deleteMany();
    console.log('Cleared existing projects');
    
    // Insert sample projects
    await Project.insertMany(projects);
    console.log('✅ Sample projects added successfully!');
    
    console.log(`Total projects added: ${projects.length}`);
    
    process.exit();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

seedDatabase();