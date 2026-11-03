
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setStatus('sending')
    setStatusMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '63d9e550-5a57-4228-af29-e1fdadfb53ec',
          ...formData,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setStatusMessage('Thank you! Your message has been sent.')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        throw new Error(result.message || 'Something went wrong.')
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage(error.message || 'Unable to send your message. Please try again.')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <p className="contact-label">GET IN TOUCH</p>

        <h2>Have a project in mind?</h2>

        <p className="contact-description">
          I'm always open to discussing new projects, ideas,
          and opportunities to collaborate.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send message ↗'}
          </button>

          {statusMessage && (
            <p className={`form-status ${status}`}>
              {statusMessage}
            </p>
          )}
        </form>

        <div className="contact-socials">
          <a href="https://www.linkedin.com/in/dkak" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="https://github.com/dkak" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
