import { useState } from "react";

function Places({ place, location, distance, rating, description, image, image2 }) {
  const [showModal, setShowModal] = useState(false);
  const stars = "⭐".repeat(rating);

  const styles = {
    card: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      background: "#0A2A43",
      color: "white",
      borderRadius: "15px",
      padding: "20px",
      margin: "40px auto",
      maxWidth: "1000px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
      cursor: "pointer",
      transition: "transform 0.3s",
      alignItems: "center"
    },
    leftSide: {
      display: "flex",
      flex: "1 1 60%",
      gap: "10px",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    rightSide: {
      flex: "1 1 35%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      gap: "15px"
    },
    images: {
      width: "48%",
      height: "250px",
      borderRadius: "12px",
      objectFit: "cover"
    },
    button: {
      padding: "10px 25px",
      borderRadius: "25px",
      background: "#FFD700",
      color: "#0A2A43",
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s"
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    },
    modalContent: {
      background: "#0A2A43",
      padding: "25px",
      borderRadius: "15px",
      color: "white",
      maxWidth: "700px",
      width: "90%",
      textAlign: "center",
      overflowY: "auto",
      maxHeight: "90vh"
    },
    modalImages: {
      width: "45%",
      height: "250px",
      objectFit: "cover",
      margin: "10px"
    },
    closeBtn: {
      padding: "10px 20px",
      borderRadius: "25px",
      border: "none",
      background: "#FFD700",
      color: "#0A2A43",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "20px"
    }
  };

  return (
    <>
      {/* Card */}
      <div style={styles.card}>
        <div style={styles.leftSide}>
          <img style={styles.images} src={image} alt={place} />
          <img style={styles.images} src={image2} alt={place} />
        </div>

        <div style={styles.rightSide}>
          <h3>{place}</h3>
          <button style={styles.button} onClick={() => setShowModal(true)}>
            Explore More
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>{place}</h2>
            <h4>{location}</h4>
            <p style={{ fontStyle: "italic", margin: "10px 0" }}>{distance}</p>
            <p>{stars}</p>
            <p style={{ margin: "15px 0", lineHeight: "1.5" }}>{description}</p>

            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
              <img style={styles.modalImages} src={image} alt={place} />
              <img style={styles.modalImages} src={image2} alt={place} />
            </div>

            <button style={styles.closeBtn} onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Places;
