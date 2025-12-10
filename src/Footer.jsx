function Footer() {

  const styles = {
    footer: {
      background: "linear-gradient(135deg, #031C2E, #0A2A43)",
      padding: "20px 0",
      textAlign: "center",
      color: "white",
      marginTop: "50px",
      borderTop: "2px solid #89CFF0"
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#89CFF0",
      marginBottom: "10px"
    },
    tagline: {
      fontSize: "14px",
      fontStyle: "italic",
      marginBottom: "10px"
    },
    p: {
      margin: "5px",
      fontSize: "13px"
    },
    copy: {
      marginTop: "8px",
      fontSize: "12px",
      opacity: 0.8
    }
  };

  return (
    <div style={styles.footer}>
      <p style={styles.title}>TRAVELMATE</p>
      <p style={styles.tagline}>Plan Your Journey With Comfort & Confidence</p>

      <p style={styles.p}>Designed & Developed by <strong>Savitha</strong></p>
      <p style={styles.copy}>{new Date().getFullYear()} TRAVELMATE. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
