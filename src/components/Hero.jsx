import profilePhoto from '../assets/profile.png'

function Hero() {
  return (
  <section className="hero-section">
    <div className="hero">
      <div className="hero-content">
        
        <p className="hero-label">
          SALESFORCE DEVELOPER & TECHNOLOGY CONSULTANT
        </p>

        <h1>
          Building digital solutions
          <br />
          that make a difference.
        </h1>

        <p className="hero-description">
          Salesforce solutions, custom applications
          & automated business processes to help businesses work
          smarter & grow.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button-primary">
            Explore my work <span>↗</span>
          </a>
          <a href="#contact" className="button-secondary">
            Get in touch
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={profilePhoto} alt="Dimitrios Kakales" />
      </div>
    </div>
  </section>
  )
}

export default Hero