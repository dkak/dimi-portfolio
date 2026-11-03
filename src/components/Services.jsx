function Services() {
  const services = [
    {
      number: '01',
      title: 'Salesforce Development',
      description:
        'Custom Apex development, Lightning Web Components and tailored Salesforce functionality.',
    },
    {
      number: '02',
      title: 'Business Process Automation',
      description:
        'Automating repetitive tasks and improving business workflows using tools and custom logic.',
    },
    {
      number: '03',
      title: 'Integrations & Custom Solutions',
      description:
        'Connecting systems, working with APIs and developing solutions that extend existing platforms.',
    },
    {
      number: '04',
      title: 'Development & Deployment',
      description:
        'Version control, CI/CD workflows and structured deployment processes for Salesforce projects.',
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