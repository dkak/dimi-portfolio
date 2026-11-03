function Projects() {
  const projects = [
    {
      number: '01',
      category: 'SALESFORCE · DEVOPS',
      title: 'Salesforce CI/CD Pipeline',
      description:
        'Automated Salesforce deployment workflow using GitHub Actions, Salesforce CLI and JWT authentication.',
      technologies: ['Salesforce DX', 'GitHub Actions', 'Apex', 'JWT'],
    },
    {
      number: '02',
      category: 'SALESFORCE · DEVELOPMENT',
      title: 'Custom Salesforce Solutions',
      description:
        'Custom Salesforce development focused on business processes, automation and platform functionality.',
      technologies: ['Apex', 'LWC', 'SOQL', 'Flows'],
    },
    {
      number: '03',
      category: 'WEB DEVELOPMENT',
      title: 'Personal Portfolio Website',
      description:
        'A lightweight, responsive portfolio built to showcase software development skills and professional projects.',
      technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <div className="projects-header">
          <p className="section-label">SELECTED WORK</p>
          <h2>Projects & implementations.</h2>
          <p>
            A selection of technical projects and solutions
            demonstrating my approach to development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <span className="project-number">
                {project.number}
              </span>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects