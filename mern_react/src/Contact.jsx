import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
    <nav class="navbar">
    <div class="logo">MyWebsite</div>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="contact.html" class="active">Contact</a></li>
    </ul>
  </nav>

  <section class="contact-content">
    <h1>Contact Us</h1>
    <form class="contact-form">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <button type="submit">Send Message</button>
    </form>
  </section>
    </>
  )
}

export default Contact