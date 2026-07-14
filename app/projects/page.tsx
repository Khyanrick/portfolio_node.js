export default function Projects() {
  return (
    <>
      {/* ================= PAGE HEADER ================= */}

      <section className="projects-hero">
        <div className="section-title">
          <h1>My Projects</h1>

          <p>
            A collection of projects that showcase my learning, technical
            skills, and problem-solving approach.
          </p>
        </div>
      </section>

      {/* ================= PROJECT GRID ================= */}

      <section className="projects-section">
        <div className="projects-grid">

          {/* Project 1 */}

          <article className="project-card">
            <div className="project-image">
              <img
                src="/images/projects/CloudVault.jpeg"
                alt="Web-based File Manager"
              />
            </div>

            <div className="project-content">
              <h2 className="project-title">
                Web-based File Manager (Mini Cloud Storage)
              </h2>

              <p className="project-description">
                Built a backend-driven file management system with
                upload/download and directory operations.
                <br />
                Implemented file handling and storage logic.
                <br />
                Designed metadata storage using a relational database (file
                structure, timestamps).
              </p>

              <div className="project-tags">
                <span className="project-tag">Flask</span>
                <span className="project-tag">HTML/CSS</span>
                <span className="project-tag">PHP</span>
                <span className="project-tag">PostgreSQL</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Khyanrick/Mini-Project-1"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>

          {/* Project 2 */}

          <article className="project-card">
            <div className="project-image">
              <img
                src="/images/projects/NLP_project.png"
                alt="NLP-Based Resume Ranking System"
              />
            </div>

            <div className="project-content">
              <h2 className="project-title">
                NLP-Based Resume Ranking System
              </h2>

              <p className="project-description">
                Developed an NLP-based system to rank resumes based on job
                description relevance.
                <br />
                Implemented text preprocessing (tokenization, stopword removal,
                vectorization).
                <br />
                Used TF-IDF and similarity scoring algorithms for ranking logic.
                <br />
                Visualized ranking results and feature distributions using
                Matplotlib.
              </p>

              <div className="project-tags">
                <span className="project-tag">Python</span>
                <span className="project-tag">Scikit-Learn</span>
                <span className="project-tag">NLP</span>
                <span className="project-tag">Matplotlib</span>
                <span className="project-tag">Pandas</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Khyanrick/SummerProject"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>

          {/* Project 3 */}

          <article className="project-card">
            <div className="project-image">
              <img
                src="/images/projects/linux.jpeg"
                alt="More Projects Coming Soon"
              />
            </div>

            <div className="project-content">
              <h2 className="project-title">
                More Projects Coming Soon
              </h2>

              <p className="project-description">
                I enjoy continuously learning and building new software.
                Stay tuned for future additions.
              </p>

              <div className="project-tags">
                <span className="project-tag">Learning</span>
                <span className="project-tag">Open Source</span>
              </div>

              <div className="project-links"></div>
            </div>
          </article>

        </div>
      </section>
    </>
  );
}
