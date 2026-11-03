function Projects() {
  const projects = [
    {
      number: '01',
      category: 'SALESFORCE · OMNISTUDIO',
      title: 'Energy & Utilities Cloud (Omnistudio & Core Automation)',
      description:
        'bla bla',
      technologies: 
      ['OmniStudio', 'OmniScripts', 'FlexCards', 'Integration Procedures', 
        'Data Mappers', 'Apex Triggers', 'Batch Apex', 'Flows'],
    },
    {
      number: '02',
      category: 'SALESFORCE · AMAZON WEB SERVICES',
      title: 'Salesforce Service Cloud Voice - Amazon Connect',
      description:
        'bla bla',
      technologies: 
      ['Amazon Connect','Salesforce Service Cloud Voice','Flow Builder',
        'Salesforce CLI','Omnichannel','AWS IAM','AWS Lambda',
        'Amazon Connect Flow'],
    },
    {
      number: '03',
      category: 'SALESFORCE EMAIL SERVICE · CI/CD PIPELINE',
      title: 'Salesforce Custom Inbound/Outbound Email Solution',
      description:
        'bla bla',
      technologies: ['Apex Email Services', 'Email Headers', 'EML Parsing',
        'Salesforce Metadata','LWC','Salesforce AppExchange','GitHub Actions',
        'Git Version Control','Apex Tests','Salesforce Metadata'],
    },
    {
      number: '04',
      category: 'ODOO · DIGITAL TRANSFORMATION',
      title: 'Odoo ERP Implementation & Digital Transformation',
      description:
        'bla bla',
      technologies: ['Business Process Engineering',
        'Point of Sale (POS) & Retail Cashier System', 'B2B Invoicing', 
        'Inventory & Warehouse Operations','Website & eCommerce'],
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