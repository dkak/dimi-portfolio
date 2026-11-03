function Expertise() {
  const expertise = [
    {
      number: '01',
      title: 'Salesforce Development',
      description:
        'Building custom Salesforce functionality and solutions tailored to business requirements.',
      skills: ['Apex', 'Lightning Web Components', 'SOQL', 'SOSL', 'Triggers', 'Flows'],
    },
    {
      number: '02',
      title: 'Programming & Web Development',
      description:
        'Developing applications and working with modern programming technologies.',
      skills: ['JavaScript', 'React', 'HTML', 'CSS', 'REST APIs'],
    },
    {
      number: '03',
      title: 'Automation & DevOps',
      description:
        'Streamlining development workflows and automating deployment processes.',
      skills: ['Git', 'GitHub Actions', 'Salesforce DX', 'CI/CD', 'JWT'],
    },
    {
      number: '04',
      title: 'Salesforce Platform',
      description:
        'Understanding the Salesforce platform, its configuration and its architecture.',
      skills: ['Data Modeling', 'Security', 'Sharing', 'Metadata', 'Integrations'],
    },
  ]

  return (
    <section id="expertise" className="expertise">
      <div className="expertise-container">

        <div className="expertise-header">
          <p className="section-label">TECHNICAL EXPERTISE</p>
          <h2>Technologies I work with.</h2>
          <p>
            A combination of platform knowledge,
            development skills and automation
            technologies.
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map((item) => (
            <div className="expertise-card" key={item.number}>
              <span className="expertise-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="expertise-skills">
                {item.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Expertise