import React from 'react'
import './About.css'

const About = () => {
  return (
    <>   <nav className="navbar">
    <div className="logo">MyWebsite</div>
    <ul className="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html" class="active">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <section className="about-content">
    <h1>About Us</h1>
    <p>We are a team of passionate developers building modern web applications using the MERN stack.</p>
  </section> </>
  
  )
}

export default About