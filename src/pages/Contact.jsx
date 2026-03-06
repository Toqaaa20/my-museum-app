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
          alert("Your message sent successfully! ✨");
          e.target.reset();
          setSending(false);
        },
        () => {
          alert("Failed to send your message, please try again later. ❌");
          setSending(false);
        }
      );
  };

  // --- Styles ---

  const pageContainer = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "120px 20px 60px", 
    backgroundColor: "transparent", 
    boxSizing: "border-box",
  };

  const formBox = {
    width: "95%",
    maxWidth: "550px",
    padding: "50px 40px",
    backgroundColor: "rgba(0, 0, 0, 0.75)", 
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: "28px",
    border: "1px solid rgba(255, 215, 0, 0.3)", 
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.6), inset 0 0 15px rgba(255, 215, 0, 0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "900",
    color: "gold",
    margin: "0 0 10px 0",
    letterSpacing: "2px",
    textTransform: "uppercase",
    textShadow: "0 4px 10px rgba(0,0,0,0.5)",
  };

  const subtitleStyle = {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "0.9rem",
    marginBottom: "20px",
    letterSpacing: "1px",
  };

  const inputGroup = {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    gap: "8px",
  };

  const labelStyle = {
    color: "gold",
    fontSize: "0.8rem",
    fontWeight: "600",
    marginLeft: "5px",
    textTransform: "uppercase",
  };

  const inputStyle = {
    padding: "16px 20px",
    borderRadius: "14px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    color: "#fff",
    outline: "none",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "16px",
    borderRadius: "50px",
    border: "1px solid gold",
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "gold",
    fontWeight: "800",
    fontSize: "1rem",
    textTransform: "uppercase",
    letterSpacing: "3px",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 5px 15px rgba(212, 175, 55, 0.1)",
  };

  return (
    <div style={pageContainer}>
      <div style={formBox}>
        <h1 style={titleStyle}>Contact Us</h1>
        <p style={subtitleStyle}>Reach out to the keepers of history</p>

        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={sendEmail}>
          
          <div style={inputGroup}>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.border = "1px solid gold")}
              onBlur={(e) => (e.target.style.border = "1px solid rgba(255, 255, 255, 0.1)")}
            />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.border = "1px solid gold")}
              onBlur={(e) => (e.target.style.border = "1px solid rgba(255, 255, 255, 0.1)")}
            />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="4"
              required
              style={{ ...inputStyle, resize: "none" }}
              onFocus={(e) => (e.target.style.border = "1px solid gold")}
              onBlur={(e) => (e.target.style.border = "1px solid rgba(255, 255, 255, 0.1)")}
            ></textarea>
          </div>

          <button 
            type="submit" 
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "gold";
              e.target.style.color = "black";
              e.target.style.boxShadow = "0 0 25px rgba(255, 215, 0, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "gold";
              e.target.style.boxShadow = "none";
            }}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}