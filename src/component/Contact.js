import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" placeholder="Address" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="Phone" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
