
export default function About() {
  return (
    <>
      {/* ================= ABOUT HERO ================= */}

      <section className="about-hero">
        <div className="section-title">
          <h1>About Me</h1>

          <p>
            Get to know who I am, what I enjoy building, and where I'm headed.
          </p>
        </div>
      </section>

      {/* ================= BIO ================= */}

      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Who I Am</h2>

            <p>
              Computer Science undergraduate focused on backend systems and
              core CS fundamentals. Skilled in Python, C, and web
              technologies, with experience in backend development, databases,
              and Linux-based environments. Currently developing expertise in
              server-side technologies and scalable backend architectures, with
              a keen interest in understanding how systems work internally.
            </p>

            <p>
              I enjoy working with Python, Django, Linux, networking, C, and
              solving challenging programming problems.
            </p>

            <p>
              My goal is to become a versatile software engineer capable of
              building reliable, efficient, and scalable applications while
              also having an understanding of how things work internally.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}

      <section className="education-section">
        <div className="section-title">
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <h3>Bachelor of Technology</h3>

          <p>Computer Science Engineering</p>
          <p>Barak Valley Engineering College</p>

          <span>Currently Pursuing</span>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section className="skills-section">
        <div className="section-title">
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">Python</div>
          <div className="skill-card">Django</div>
          <div className="skill-card">Linux</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">HTML/CSS</div>
          <div className="skill-card">C Programming</div>
          <div className="skill-card">MySQL/PostgreSQL</div>
          <div className="skill-card">Networking</div>
        </div>
      </section>

      {/* ================= INTERESTS ================= */}

      <section className="interests-section">
        <div className="section-title">
          <h2>Interests</h2>
        </div>

        <div className="interests-grid">
          <div className="interest-card">
            💻
            <h3>Software Development</h3>
          </div>

          <div className="interest-card">
            🐧
            <h3>Linux</h3>
          </div>

          <div className="interest-card">
            🌐
            <h3>Networking</h3>
          </div>

          <div className="interest-card">
            📚
            <h3>Continuous Learning</h3>
          </div>
        </div>
      </section>
    </>
  );
}