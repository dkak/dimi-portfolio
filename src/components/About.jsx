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
            I'm a developer focused on Salesforce and
            software development, with an interest in
            building solutions that simplify complex
            business processes.
          </p>

          <p>
            I enjoy working across different areas of
            technology, from backend development and
            automation to integrations and deployment
            workflows.
          </p>

          <p>
            My approach combines technical thinking,
            continuous learning and an understanding
            of the business needs behind every solution.
          </p>

          <p>
            I have experience in implementing Salesforce solutions
            from my time working as a Salesforce Developer in
            a consulting international environment. After that I have 
            been working as an ERP/CRM consultant and experimented with
            multiple technologies and platforms including Odoo.
          </p>

          <p>
            Over the last year I have been also interested in learning more about Devops
            and Cybersecurity deepening my knowledge in these areas and getting a more
            holistic view of the software development lifecycle.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About