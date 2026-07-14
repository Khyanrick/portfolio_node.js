export default function Contact() {
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

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
