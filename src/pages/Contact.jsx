import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_hh1i6f9",     
        "template_quyijwd",    
        e.target,
        "OSIsRWaopIaFrXV16"      
      )
      .then(
        () => {
          alert("Your message sent successfully!");
          e.target.reset();
          setSending(false);
        },
        () => {
          alert("Failed to send your message, please try again later. ");
          setSending(false);
        }
      );
  };

  const pageStyle = {
    width: "100vw",
    minHeight: "100vh",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    backgroundImage: 'url("/images/wallpaper.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const formStyle = {
    width: "90%",
    maxWidth: "500px",
    padding: "30px",
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: "12px",
    backdropFilter: "blur(5px)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    border: "1px solid rgba(255,255,255,0.3)",
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #fff",
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "white",
    outline: "none",
    fontSize: "1rem",
  };

  const buttonStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "rgba(255,255,255,0.1)",
    fontWeight: "700",
    fontSize: "1rem",
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ marginBottom: "20px", fontSize: "2.2rem" }}>
        Contact Us
      </h1>

      <form style={formStyle} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />


        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          style={inputStyle}
        ></textarea>

        <button type="submit" style={buttonStyle}>
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
