import React from "react";
import bgImage from "../assets/background.jpg"; // ✅ ensure the path is correct

const Hero = () => {
  const styles = {
    wrapper: {
      position: "relative",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      paddingTop: "140px",
      paddingBottom: "100px",
      paddingLeft: "20px",
      paddingRight: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      zIndex: 1,
    },
    box: {
      position: "relative",
      zIndex: 2,
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "50px 30px",
      maxWidth: "900px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      fontSize: "48px",
      fontWeight: "800",
      color: "#121a2f",
      marginBottom: "24px",
      lineHeight: "1.3",
    },
    highlight: {
      color: "#8b88a2",
    },
    subtext: {
      fontSize: "18px",
      color: "#2d2d4c",
      marginTop: "10px",
      lineHeight: "1.5",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}></div>
      <div style={styles.box}>
        <h1 style={styles.heading}>
          Empowering <span style={styles.highlight}>Indigenous Talent</span><br />
          Across <span style={styles.highlight}>Canada</span>
        </h1>
        <p style={styles.subtext}>
          Discover meaningful career opportunities designed to support Indigenous communities and help you thrive professionally.
        </p>
      </div>
    </div>
  );
};

export default Hero;
