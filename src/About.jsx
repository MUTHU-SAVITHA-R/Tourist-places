function About() {
  const isMobile = window.innerWidth <= 768;

  const styles = {
    container: {
      padding: isMobile ? "20px" : "40px",
      background: "linear-gradient(135deg, #0A2A43, #013A63)",
      color: "#F0F8FF",
      textAlign: "center",
      borderRadius: "20px",
      maxWidth: "1000px",
      margin: "auto",
      boxShadow: "0 8px 20px rgba(0,0,0,0.4)"
    },
    heading: {
      fontSize: isMobile ? "28px" : "36px",
      marginBottom: "15px",
      color: "#89CFF0",
      fontWeight: "700"
    },
    subHeading: {
      fontSize: isMobile ? "20px" : "26px",
      marginTop: "20px",
      marginBottom: "10px",
      color: "#ADD8E6"
    },
    text: {
      fontSize: isMobile ? "16px" : "18px",
      margin: "10px auto",
      maxWidth: "850px",
      lineHeight: "1.6"
    },
    motto: {
      fontSize: isMobile ? "18px" : "22px",
      marginTop: "25px",
      fontStyle: "italic",
      color: "#FFD700"
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About TravelMate</h1>

      <p style={styles.text}>
        TravelMate is a user-friendly travel discovery platform designed to help explorers
        find the best tourist destinations.
      </p>

      <h2 style={styles.subHeading}>Our Vision</h2>
      <p style={styles.text}>
        To simplify travel planning and guide users with authentic information.
      </p>

      <p style={styles.motto}>“Discover. Explore. Experience.”</p>
    </div>
  );
}

export default About;
