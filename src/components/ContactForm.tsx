// components/ContactForm.tsx
'use client';
import React, { useState } from 'react';
import TextField from './TextField';
import TextAreaField from './TextAreaField';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit form data
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        type="text"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <TextAreaField
        label="Message"
        name="message"
        required
        value={formData.message}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-jada-purple hover:bg-jada-pink text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
