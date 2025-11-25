import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Css/ContactForm.css";

const ContactForm = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");


  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_oi2urgn",   // Replace with your Service ID
        "template_wjwdshs",  // Replace with your Template ID
        formRef.current,
        "NM21v87ZH_5-0ZJx4"    // Replace with your Public Key
      )
      .then(
        (result) => {
          setMessage("Message sent successfully!");
          setIsLoading(false);
          formRef.current.reset();
        },
        (error) => {
          setMessage("Failed to send message. Try again.");
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default ContactForm;
