function Places(props) {
  const stars = "⭐".repeat(props.rating);

  const styles = {
    card: {
      margin: "100px",
      display: "flex",
      justifyContent: "space-between",
      background: "linear-gradient(135deg, #A6D3FF, #0A2A43)",
      color: "white",
      borderRadius: "10px",
      padding: "15px"
    },
    leftside: { display: "flex", width: "70%" },
    rightside: { width: "250px" },
    images: {
      width: "50%",
      height: "250px",
      objectFit: "cover"
    }
  };

  return (
    <div style={styles.card} className="place-card">
      <div style={styles.leftside} className="place-images">
        <img style={styles.images} src={props.image} alt="" />
        <img style={styles.images} src={props.image2} alt="" />
      </div>

      <div style={styles.rightside} className="place-info">
        <h3>{props.place}</h3>
        <h4>{props.location}</h4>
        <p>{props.distance}</p>
        <p>{stars}</p>

        <p style={{ color: "#FFD700", fontWeight: "bold" }}>
          🌟 Popular Tourist Spot
        </p>

        <button style={{
          padding: "8px 15px",
          borderRadius: "20px",
          background: "#FFD700",
          border: "none",
          cursor: "pointer"
        }}>
          Explore More
        </button>
      </div>
    </div>
  );
}

export default Places;
