
import React from "react";
import "./App.css";

const GITHUB_URL = "https://github.com/pratikshakanadje636-ux";
const LINKEDIN_URL = "https://www.linkedin.com/in/pratiksha-kanodje-1710b131a/";
const EMAIL = "pratikshakanadje636@gmail.com";
const RESUME_PATH = "Resume.pdf";

const skills = [
  { name: "Python", category: "Programming", number: "01", symbol: "Py" },
  { name: "Data Structures & Algorithms", category: "Problem Solving", number: "02", symbol: "DS" },
  { name: "NumPy", category: "Python Library", number: "03", symbol: "Np" },
  { name: "HTML & CSS", category: "Web Development", number: "04", symbol: "</>" },
  { name: "JavaScript", category: "Web Development", number: "05", symbol: "JS" },
  { name: "PHP", category: "Backend Development", number: "06", symbol: "Php" },
  { name: "MySQL", category: "Database", number: "07", symbol: "DB" },
  { name: "Git & GitHub", category: "Version Control", number: "08", symbol: "Git" },
];

const projects = [
  {
    number: "01",
    title: "RaktaSetu AI",
    category: "Web Development · AI/ML",
    description:
      "A web-based blood availability platform designed to connect blood requests with donor information and provide useful stock insights.",
    tags: ["PHP", "MySQL", "JavaScript", "Python", "Machine Learning"],
    theme: "project-red",
    symbol: "✚",
    artCaption: "Connecting blood. Saving lives.",
  },
  {
    number: "02",
    title: "AI-Powered Employee Task & Productivity System",
    category: "AI/ML · Web Application",
    description:
      "A task and productivity application designed to organize work, track progress, and make task management more efficient.",
    tags: ["Python", "AI/ML", "Web Development", "Database"],
    theme: "project-blue",
    symbol: "⌘",
    artCaption: "Organize work. Track progress.",
  },
];

const journey = [
  {
    date: "2024 – 2027",
    type: "EDUCATION",
    title: "B.Sc. Computer Science",
    organization: "Undergraduate Studies",
    description:
      "Building a foundation in programming, databases, problem solving, and software development.",
    status: "In progress",
  },
  {
    date: "OCTOBER 2026",
    type: "INTERNSHIP",
    title: "Web Development Intern",
    organization: "CodSoft",
    description: "Web development internship scheduled for October 2026.",
    status: "Internship",
  },
  {
    date: "ONGOING",
    type: "SKILL DEVELOPMENT",
    title: "Python & Data Structures",
    organization: "Continuous Learning",
    description:
      "Practising Python, strengthening DSA fundamentals, and developing web-based projects.",
    status: "Learning",
  },
];

function BrandLogo({ className = "" }) {
  return (
    <img
      src="/pratiksha-logo.png"
      alt="Pratiksha logo"
      className={`brand-logo ${className}`}
    />
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="portfolio" id="top">
      <header className="navbar">
        <a href="#top" className="logo" aria-label="Back to top">
          <BrandLogo className="navbar-logo-image" />
          <span className="logo-name">
            Pratiksha<span className="logo-dot">.</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
        </nav>

        <a className="nav-contact" href="#contact">
          Let's Talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="status-dot" />
              <span>COMPUTER SCIENCE STUDENT</span>
            </div>

            <h1>
              Building ideas
              <br />
              into <span className="gradient-text">reality.</span>
            </h1>

            <p className="hero-description">
              Hi, I'm <strong>Pratiksha Kanodje</strong> — an aspiring software
              engineer passionate about Python, problem solving, and building
              meaningful web applications.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work <span aria-hidden="true">↗</span>
              </a>

              <a href="#about" className="button button-secondary">
                More about me <span aria-hidden="true">↓</span>
              </a>

              <a
                href={RESUME_PATH}
                download="Pratiksha-Kanodje-Resume.pdf"
                className="button button-secondary"
              >
                <span aria-hidden="true">↓</span> Download Resume
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                <span aria-hidden="true">↗</span> GitHub
              </a>
            </div>

            <div className="hero-sidebar">
              <span className="sidebar-label">CURRENT FOCUS</span>

              <a href="#skills" className="sidebar-link">
                <span className="sidebar-number">01</span>
                <span className="sidebar-link-text">Python & DSA</span>
                <span className="sidebar-arrow">↗</span>
              </a>

              <a href="#projects" className="sidebar-link">
                <span className="sidebar-number">02</span>
                <span className="sidebar-link-text">Web Development</span>
                <span className="sidebar-arrow">↗</span>
              </a>

              <a href="#projects" className="sidebar-link">
                <span className="sidebar-number">03</span>
                <span className="sidebar-link-text">AI/ML Projects</span>
                <span className="sidebar-arrow">↗</span>
              </a>

              <div className="sidebar-skills">
                <span className="sidebar-label">TOOLS I USE</span>
                <div className="skill-chips">
                  <span className="skill-chip">Python</span>
                  <span className="skill-chip">PHP</span>
                  <span className="skill-chip">MySQL</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-glow" />
            <div className="portrait-ring ring-one" />
            <div className="portrait-ring ring-two" />

            <div className="portrait-orbit">
              <span className="orbit-point orbit-point-one" />
              <span className="orbit-point orbit-point-two" />
              <span className="orbit-point orbit-point-three" />
            </div>

            <div className="portrait-card">
              <div className="portrait-topline">
                <span>PORTFOLIO / 2026</span>
                <span className="portrait-live">
                  <span className="status-dot" /> AVAILABLE TO CONNECT
                </span>
              </div>

              <div className="portrait-image-wrap">
                <img
                  src="/Pratiksha.jpg"
                  alt="Portrait of Pratiksha Kanodje"
                  className="portrait"
                />
              </div>

              <div className="portrait-info">
                <div className="portrait-mark">
                  <BrandLogo className="portrait-logo-image" />
                </div>

                <div className="portrait-info-text">
                  <h3>Pratiksha Kanodje</h3>
                  <p>Aspiring Software Engineer</p>
                </div>

                <a
                  className="info-arrow"
                  href="#about"
                  aria-label="Learn more about Pratiksha"
                >
                  ↗
                </a>
              </div>
            </div>

            <div className="floating-chip chip-python">
              <span className="chip-symbol">Py</span>
              <span>Python</span>
            </div>

            <div className="floating-chip chip-web">
              <span className="chip-symbol">&lt;/&gt;</span>
              <span>Web Dev</span>
            </div>

            <div className="floating-chip chip-ai">
              <span className="chip-symbol">AI</span>
              <span>AI / ML</span>
            </div>

            <div className="portrait-side-label">LEARN · BUILD · GROW</div>
          </div>

          <a href="#about" className="scroll-cue">
            <span className="scroll-line" />
            <span>SCROLL TO EXPLORE</span>
          </a>

          <span className="hero-index">01 / 05</span>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious by nature." />

          <div className="about-grid">
            <div className="about-intro">
              <span className="section-overline">WHO I AM</span>
              <h3>
                Learning today.
                <br />
                <span className="gradient-text">Building for tomorrow.</span>
              </h3>

              <p>
                I'm a third-year B.Sc. Computer Science student with an interest
                in software engineering and practical problem solving. I enjoy
                learning how applications work, exploring new technologies,
                and turning ideas into working projects.
              </p>

              <p>
                My current learning journey focuses on Python, data structures
                and algorithms, web development, and database fundamentals. I
                aim to keep improving through consistent practice and hands-on
                projects.
              </p>

              <a className="text-link" href="#contact">
                Let's connect <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="about-facts">
              <article className="fact-card">
                <span className="fact-number">01</span>
                <h4>Problem Solving</h4>
                <p>Practising logic, Python, and DSA fundamentals.</p>
              </article>

              <article className="fact-card">
                <span className="fact-number">02</span>
                <h4>Building Projects</h4>
                <p>Applying concepts through web applications and databases.</p>
              </article>

              <article className="fact-card">
                <span className="fact-number">03</span>
                <h4>Always Learning</h4>
                <p>Developing skills through practice and experimentation.</p>
              </article>

              <article className="fact-card">
                <span className="fact-number">04</span>
                <h4>Career Goal</h4>
                <p>Working towards software engineering opportunities.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading
            eyebrow="WHAT I WORK WITH"
            title="Skills & technologies."
            description="Technologies I'm learning and using in my projects."
          />

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.number}>
                <div className="skill-card-top">
                  <span className="skill-card-number">{skill.number}</span>
                  <span className="skill-symbol">{skill.symbol}</span>
                </div>

                <div className="skill-card-bottom">
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.category}</p>
                  </div>
                  <span className="skill-card-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="projects-heading">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Projects in progress."
              description="Practical applications built to explore ideas and apply what I learn."
            />
            <span className="projects-count">02 PROJECTS</span>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.theme}`}
                key={project.number}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-art">
                  <div className="project-art-grid" />
                  <span className="project-symbol">{project.symbol}</span>
                  <span className="project-art-caption">
                    {project.artCaption}
                  </span>
                </div>

                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-bottom">
                    <span>PROJECT / {project.number}</span>
                    <span className="project-bottom-mark">✳</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section journey-section" id="journey">
          <SectionHeading
            eyebrow="MY JOURNEY"
            title="Learning as I go."
            description="Education, experience, and the skills I'm developing along the way."
          />

          <div className="timeline">
            {journey.map((item, index) => (
              <article
                className="timeline-item"
                key={`${item.date}-${item.title}`}
              >
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="timeline-date">{item.date}</div>

                <div className="timeline-content">
                  <div className="timeline-content-top">
                    <span className="timeline-type">{item.type}</span>
                    <span className="timeline-status">{item.status}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <h4>{item.organization}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-orb orb-one" />
          <div className="contact-orb orb-two" />

          <span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span>
          <h2>
            Let's build something
            <br />
            <span className="gradient-text">meaningful.</span>
          </h2>

          <p className="contact-description">
            I'm interested in connecting with people, learning from new
            opportunities, and exploring software development projects.
          </p>

          <div className="contact-actions">
            <a
              className="button button-primary"
              href={`mailto:${EMAIL}`}
            >
              Get in touch <span aria-hidden="true">↗</span>
            </a>

            <a
              className="button button-secondary"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>

            <a
              className="button button-secondary"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>

            <a
              className="button button-secondary"
              href={RESUME_PATH}
              download="Pratiksha-Kanodje-Resume.pdf"
            >
              Download Resume <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="contact-meta">
            <span><span className="status-dot" /> OPEN TO CONNECT</span>
            <span>BASED IN INDIA</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#top" className="logo footer-logo" aria-label="Back to top">
          <BrandLogo className="footer-logo-image" />
          <span className="logo-name">
            Pratiksha<span className="logo-dot">.</span>
          </span>
        </a>

        <p>Designed & built with curiosity.</p>

        <div className="footer-socials">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>

        <a className="back-to-top" href="#top">
          BACK TO TOP <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
