const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to database
    const contact = new Contact({ name, email, message });
    await contact.save();

    console.log('✅ Contact saved to database');

    // Try to send email (if configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `Portfolio Contact: ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully');
      } catch (emailError) {
        console.log('⚠️ Email failed but contact saved:', emailError.message);
      }
    }

    res.status(201).json({ 
      message: 'Message sent successfully! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ message: 'Failed to send message. Please try again.' });
  }
};