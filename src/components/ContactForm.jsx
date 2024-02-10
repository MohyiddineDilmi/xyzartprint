import React, { useState } from 'react';
import styles from '../modules/styles.module.css'
import {colors, materials} from "./constants";

function ContactForm({selectedColor, weight, selectedMaterial }) {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    note: '',
    color: '',
    weight: '',
    material: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const colorName = colors.find( x => x.code == selectedColor );
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
            Color: "${(colorName||{}).name || selectedColor}",
            Weight: "${weight.toFixed(2)}",
            Material: "${selectedMaterial}",
            \`\`\`
            `,
        }),
      });
  
      if (response.ok) {
        console.log('Form submitted successfully');
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
  

  return (
      <form style={{paddingBottom: '2rem'}} onSubmit={handleSubmit}>
        <p>
          C:{selectedColor} W:{weight} M:{selectedMaterial}
        </p>
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
          />
        </div>
        <button type="submit" className={`${styles.print_button}`}>Print it</button>
      </form>
  );
}

export default ContactForm;
