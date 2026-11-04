function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">

        <div className="about-heading">
          <p className="section-label">ABOUT ME</p>
          <br></br>
          <br></br>
          <img
            src="/about-photo.jpg"
            alt="Dimitrios"
            className="about-photo"
          />
          <br></br>
          <h2 className="about-quote">
            <span className="quote-mark">“</span>
            I believe technology is more than code. It's about solving problems.
            <span className="quote-mark closing">”</span>
          </h2>
                    
        </div>

        <div className="about-description">
          <p>
            I'm a developer focused on Salesforce and software development, with
            an interest in building solutions that simplify complex business 
            processes.
          </p>

          <p>
            I enjoy working across different areas of technology, from backend
            development and automation to integrations and deployment workflows.
          </p>

          <p>
            My approach combines technical thinking, continuous learning, and an
            understanding of the business needs behind every solution.
          </p>

          <p>
            I have experience implementing Salesforce solutions from my time 
            working as a Salesforce Developer in an international consulting 
            environment. Since then I have been working and experimenting with
            various platforms and technologies, including a digital transformation
            of a retail business using Odoo ERP.
          </p>

          <p>
            Over the past year, I've also expanded my knowledge in DevOps and 
            Cybersecurity while continuing to develop my skills in software 
            development. Exploring these areas has given me a broader 
            understanding of the technologies and processes involved in the
            software development lifecycle.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About