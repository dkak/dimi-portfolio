function Navbar() {
  return (
    <header className="navbar">
      
      <a href="#" className="navbar-logo">
        Dimitris Kakales OR dimi<span>.</span>
      </a>

      <nav className="navbar-links">
        <a href="#about">About</a>
        <a href="#expertise">Expertise</a>
        <a href="#projects">Projects</a>
      </nav>

      <a href="#contact" className="navbar-contact">
        Let's connect <span>↗</span>
      </a>
    </header>
  )
}

export default Navbar