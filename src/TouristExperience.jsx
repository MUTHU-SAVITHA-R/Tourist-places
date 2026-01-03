function TouristExperience() {
  return (
    <div style={{
      margin: "60px auto",
      padding: "30px",
      maxWidth: "1000px",
      background: "linear-gradient(135deg,#0A2A43,#013A63)",
      borderRadius: "20px",
      color: "white",
      textAlign: "center"
    }}>
      <h2 style={{ color: "#89CFF0" }}>Why TravelMate?</h2>

      <div style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>
        <p>🗺️ Smart Search</p>
        <p>📍 Accurate Locations</p>
        <p>⭐ Top Rated Places</p>
        <p>📱 Responsive Design</p>
      </div>
    </div>
  );
}

export default TouristExperience;
