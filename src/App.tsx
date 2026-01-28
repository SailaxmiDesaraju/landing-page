import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!email) {
      setError('Please enter your email address')
      return
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    // Simulate form submission
    setSubmitted(true)
    console.log('Email submitted:', email)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <div className="coming-soon-container">
      <div className="content-wrapper">
        <div className="logo-container">
          <svg 
            className="logo" 
            viewBox="0 0 120 120" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#D4AF37', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#B8860B', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path 
              d="M60 20 L45 45 L30 40 L20 60 L40 65 L60 50 L80 65 L100 60 L90 40 L75 45 Z" 
              fill="url(#goldGradient)" 
              stroke="#8B6914" 
              strokeWidth="2"
            />
            <circle cx="40" cy="50" r="4" fill="#8B0000" />
            <circle cx="60" cy="45" r="5" fill="#FFD700" />
            <circle cx="80" cy="50" r="4" fill="#8B0000" />
            <ellipse cx="60" cy="85" rx="25" ry="8" fill="#8B4513" opacity="0.8" />
            <path 
              d="M35 85 Q35 75 45 75 L75 75 Q85 75 85 85 L85 95 Q85 100 80 100 L40 100 Q35 100 35 95 Z" 
              fill="#F5DEB3" 
              stroke="#8B4513" 
              strokeWidth="2"
            />
            <path d="M50 70 Q52 60 50 50" stroke="#D3D3D3" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M60 70 Q62 55 60 45" stroke="#D3D3D3" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M70 70 Q72 60 70 50" stroke="#D3D3D3" strokeWidth="2" fill="none" opacity="0.6" />
          </svg>
        </div>

        <h1 className="tagline">Brew the Royal Tradition</h1>

        <p className="brand-description">
          Experience the authentic taste of premium instant chai tea premix, 
          crafted with the finest spices and inspired by the royal Indian households. 
          A regal blend that brings tradition to your cup.
        </p>

        <div className="launching-soon">
          <span className="badge-text">Launching Soon</span>
        </div>
        <form className="email-signup" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError('')
              }}
              className={`email-input ${error ? 'error' : ''}`}
              disabled={submitted}
            />
            <button 
              type="submit" 
              className="submit-button"
              disabled={submitted}
            >
              {submitted ? '✓' : 'Notify Me'}
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
          {submitted && (
            <p className="success-message">
              Thank you! We'll notify you when we launch.
            </p>
          )}
        </form>

        <div className="social-icons">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social-icon"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-icon"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="social-icon"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="social-icon"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="decorative-elements">
        <div className="spice-icon">☕</div>
        <div className="spice-icon">🌿</div>
        <div className="spice-icon">✨</div>
      </div>
    </div>
  )
}

export default App
