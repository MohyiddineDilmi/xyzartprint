import React, { useState } from 'react';
import styles from '../modules/styles.module.css'
import FormSent from './FormSent'; // Import the FormSent component

function ContactForm({selectedColor, weight, materialDensity, url}) {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    note: '',
    color: '',
    weight: '',
    material: '',
    url: '', 
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://discord.com/api/webhooks/1204817262591221801/lT4nZWlKjJdnl4nOP2A9_XdxeaNoKpZnMVigmsNQMGCSUatbGS8Cp-fwVccApPnSKOho', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `
            ### New Request
            \`\`\`js
            Name: "${formData.name}",
            Phone Number: "${formData.phoneNumber}",
            Email: "${formData.email}",
            Note: "${formData.note}",
            Color: "${selectedColor}",
            Weight: "${weight}",
            Material: "${materialDensity}",
            Download URL: "${url}",
            \`\`\`
            `,
        }),
      });
  
      if (response.ok) {
        console.log('Form submitted successfully');
        setFormSubmitted(true); // Set formSubmitted to true after successful submission
        // Optionally, reset the form after successful submission
        setFormData({
          name: '',
          phoneNumber: '',
          email: '',
          note: '',
        });
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  // Conditionally render FormSent component if formSubmitted is true
  if (formSubmitted) {
    return <FormSent />;
  }

  return (
    <form style={{paddingBottom: '2rem'}} onSubmit={handleSubmit}>
      <div className={`${styles.input_wrapper}`}>
        <label htmlFor="name">Name (optional)</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className={`${styles.input_wrapper}`}>
        <label htmlFor="phoneNumber">Phone number (required)</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className={`${styles.input_wrapper}`}>
        <label htmlFor="email">Email (required)</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={`${styles.input_wrapper}`}>
        <label htmlFor="note">Note (optional)</label>
        <textarea
          id="note"
          name="note"
          value={formData.note}
          onChange={handleChange}
          className={styles.textarea}
        />
      </div>
      <button type="submit" className={`${styles.print_button}`}>Print it</button>
    </form>
  );
}

export default ContactForm;
