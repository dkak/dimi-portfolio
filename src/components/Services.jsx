function Services() {
  const services = [
    {
      number: '01',
      title: 'Salesforce Development',
      description:
        'Custom Salesforce development using Apex, Lightning Web Components, OmniStudio, Flows, and tailored business automation solutions.',
    },
    {
      number: '02',
      title: 'Development & Deployment',
      description:
        'Managing Salesforce development workflows through Git version control, CI/CD automation, automated validation, and structured deployment processes across environments.',
    },
    {
      number: '03',
      title: 'Business Process Automation',
      description:
        'Automating business processes and streamlining workflows through custom development, system configuration, and integrations.',
    },
    {
      number: '04',
      title: 'Integrations & Custom Solutions',
      description:
        'Integrating systems through APIs, custom integrations, and data exchange solutions to connect platforms and extend their functionality.',
    },
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">

        <div className="services-header">
          <p className="section-label">HOW I CAN HELP</p>
          <h2>Turning ideas into practical solutions.</h2>
          <p>
            Whether it's improving an existing Salesforce
            environment or building something new, I enjoy
            tackling technical challenges.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <div className="service-item" key={service.number}>
              <span>{service.number}</span>

              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <span className="service-arrow">↗</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services