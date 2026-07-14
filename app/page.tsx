import Link from "next/link";



export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-name">Khyanrick</h1>

          <h2 className="hero-role">
            Computer Science Engineering Student | Django Developer |
            Low Level Programming Enthusiast
          </h2>

          <p className="hero-description">
            Passionate about Linux, Python, Django, Networking, and building
            practical software that solves real-world problems.
          </p>

          <div className="hero-buttons">
            <Link href="/projects" className="btn btn-primary">
              View Projects
            </Link>

            <Link href="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/images/profile/profile.jpeg"
            alt="Khyanrick"
          />
        </div>
      </section>

      {/* ================= FEATURED SKILLS ================= */}

      <section className="featured-skills">
        <div className="section-title">
          <h2>Core Skills</h2>

          <p>Technologies I enjoy working with.</p>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Python</h3>
            <p>Automation, scripting, backend development.</p>
          </div>

          <div className="skill-card">
            <h3>Django</h3>
            <p>Building scalable web applications.</p>
          </div>

          <div className="skill-card">
            <h3>Linux</h3>
            <p>System administration and development environment.</p>
          </div>

          <div className="skill-card">
            <h3>Git & GitHub</h3>
            <p>Version control and collaborative development.</p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}

      <section className="featured-projects">
        <div className="section-title">
          <h2>Featured Projects</h2>

          <p>A few projects that showcase my learning journey.</p>
        </div>

        <div className="project-preview-grid">
          <article className="project-preview-card">
            <h3>Web-based File Manager (Mini Cloud Storage)</h3>

            <p>
              Built a backend-driven file management system with
              upload/download and directory operations using Python, Flask,
              HTML/CSS/JS, and PostgreSQL.
            </p>
          </article>

          <article className="project-preview-card">
            <h3>NLP-Based Resume Ranking System</h3>

            <p>
              Developed an NLP-based system to rank resumes based on job
              description relevance using Python, scikit-learn, Matplotlib, and
              Pandas.
            </p>
          </article>

          <article className="project-preview-card">
            <h3>More Coming Soon...</h3>

            <p>
              I'm constantly building new projects and learning new
              technologies.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
