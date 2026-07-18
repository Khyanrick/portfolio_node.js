"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const [errors, setErrors] = useState({
  name: "",
  email: "",
  message: "",
});

const [success, setSuccess] = useState("");

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const newErrors = {
    name: "",
    email: "",
    message: "",
  };

  let valid = true;

  if (!formData.name.trim()) {
    newErrors.name = "Name is required.";
    valid = false;
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Please enter a valid email.";
    valid = false;
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required.";
    valid = false;
  }

  setErrors(newErrors);

  if (!valid) {
    setSuccess("");
    return;
  }

  setSuccess("✅ Message validated successfully!");

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
};

  return (
    <>
      {/* ================= CONTACT HERO ================= */}

      <section className="contact-hero">
        <div className="section-title">
          <h1>Let's Connect</h1>

          <p>
            Have a project, internship opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}

      <section className="contact-section">
        {/* Contact Information */}

        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="contact-item">
            <h3>Email</h3>

            <a href="mailto:khyanrickb@gmail.com">
              khyanrickb@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <h3>GitHub</h3>

            <a
              href="https://github.com/Khyanrick"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Khyanrick
            </a>
          </div>

          <div className="contact-item">
            <h3>LinkedIn</h3>

            <a
              href="https://in.linkedin.com/in/khyanrick-borah-207210282"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/khyanrick-borah
            </a>
          </div>

          <div className="contact-item">
            <h3>Location</h3>

            <p>Assam, India</p>
          </div>
        </div>

        {/* Contact Form */}

        <div className="contact-form-container">
          <h2>Send a Message</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="name">Name</label>

    <input
      type="text"
      id="name"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
    />

    {errors.name && (
      <p className="error-text">{errors.name}</p>
    )}
  </div>

  <div className="form-group">
    <label htmlFor="email">Email</label>

    <input
      type="email"
      id="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
    />

    {errors.email && (
      <p className="error-text">{errors.email}</p>
    )}
  </div>

  <div className="form-group">
    <label htmlFor="subject">Subject</label>

    <input
      type="text"
      id="subject"
      name="subject"
      placeholder="Subject"
      value={formData.subject}
      onChange={handleChange}
    />
  </div>

  <div className="form-group">
    <label htmlFor="message">Message</label>

    <textarea
      id="message"
      name="message"
      rows={6}
      placeholder="Write your message here..."
      value={formData.message}
      onChange={handleChange}
    />

    {errors.message && (
      <p className="error-text">{errors.message}</p>
    )}
  </div>

  {success && (
    <p className="success-text">{success}</p>
  )}

  <button type="submit" className="btn btn-primary">
    Send Message
  </button>
</form>
        </div>
      </section>
    </>
  );
}