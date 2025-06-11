import React from "react";
import contactImage from "../assets/contact.svg"; // Replace with your uploaded image path

const Contact = () => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "40px",
      maxWidth: "1100px",
      margin: "auto",
      flexWrap: "wrap",
      backgroundColor: "#fff",
    },
    imageContainer: {
      flex: 1,
      textAlign: "center",
    },
    image: {
      width: "100%",
      maxWidth: "500px",
    },
    content: {
      flex: 1,
      paddingLeft: "40px",
    },
    icon: {
      background: "#f7f7fa",
      padding: "15px",
      width: "60px",
      height: "60px",
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px",
      fontSize: "24px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    },
    heading: {
      fontSize: "24px",
      marginBottom: "16px",
      color: "#1a1a1a",
      fontWeight: "600",
    },
    paragraph: {
      color: "#718096",
      fontSize: "16px",
      marginBottom: "12px",
      lineHeight: "1.6",
    },
    contactInfo: {
      fontWeight: "bold",
      color: "#2c2c4e",
      fontSize: "18px",
    },
    responsive: {
      flexDirection: "column",
      textAlign: "center",
      padding: "20px",
    },
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div style={{ ...styles.container, ...(isMobile && styles.responsive) }}>
      <div style={styles.imageContainer}>
        <img src={contactImage} alt="Contact Illustration" style={styles.image} />
      </div>
      <div style={styles.content}>
        <div style={styles.icon}>✉️</div>
        <h2 style={styles.heading}>Email</h2>
        <p style={styles.paragraph}>
          If you would like to contact us and receive support, we recommend sending us an email. One of our representatives will reply to you within 24 hours.
        </p>
        <p style={styles.contactInfo}>admin@aboriginalcareer.ca</p>
      </div>
    </div>
  );
};

export default Contact;
