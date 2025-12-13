function About() {

  const isMobile = window.innerWidth <= 768;

  const styles = {
    container: {
      marginTop: "50px",
      padding: isMobile ? "15px" : "25px",
      background: "linear-gradient(135deg,#0A2A43,#013A63)",
      color: "white",
      textAlign: "center"
    },
    heading: {
      fontSize: isMobile ? "24px" : "32px",
      marginBottom: "12px",
      color: "#89CFF0"
    },
    subHeading: {
      fontSize: isMobile ? "18px" : "22px",
      marginTop: "16px",
      marginBottom: "8px",
      color: "#ADD8E6"
    },
    text: {
      fontSize: isMobile ? "15px" : "18px",
      margin: "8px auto",
      maxWidth: "850px",
      lineHeight: "1.5"
    },
    motto: {
      fontSize: isMobile ? "16px" : "20px",
      marginTop: "15px",
      fontStyle: "italic",
      color: "#89CFF0"
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About TravelMate</h1>

      <p style={styles.text}>
        TravelMate is a user-friendly travel discovery platform designed to help explorers
        find the best tourist destinations with accurate details like location, distance,
        rating, highlights and images.
      </p>

      <h2 style={styles.subHeading}>Our Vision</h2>
      <p style={styles.text}>
        To simplify travel planning and guide users with authentic information so they can
        explore new places with confidence and excitement.
      </p>

      <h2 style={styles.subHeading}>What We Offer</h2>
      <p style={styles.text}>
        • Tourist attraction details<br/>
        • Distance from major cities<br/>
        • Clean UI with images & ratings<br/>
        • Travel guide experience<br/>
        • Easy navigation
      </p>

      <h2 style={styles.subHeading}>Why TravelMate?</h2>
      <p style={styles.text}>
        • Easy to use<br/>
        • Accurate travel information<br/>
        • Saves time<br/>
        • Modern user interface
      </p>

      <p style={styles.motto}>
        “Discover. Explore. Experience.”
      </p>
    </div>
  );
}

export default About;
