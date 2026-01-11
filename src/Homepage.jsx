import { useNavigate } from "react-router-dom";
import tour from "./assets/tour.jpg";
import TouristExperience from "./TouristExperience";

function Homepage() {
  const navigate = useNavigate();

  const styles = {
    container: {
      textAlign: "center",
      marginTop: "80px",
      background: "linear-gradient(135deg, #013A63, #89CFF0)",
      minHeight: "auto",
      overflowX: "hidden",
      paddingBottom: "40px"
    },

    cityBar: {
      background: "#0A2A43",
      color: "white",
      padding: "10px",
      borderRadius: "15px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      width: "fit-content",
      maxWidth: "90%",
      margin: "20px auto",
      cursor: "pointer"
    },

    img: {
      width: "90%",
      maxWidth: "800px",
      borderRadius: "15px",
      marginTop: "20px",
      maxHeight: "300px",
      objectFit: "cover"
    }


  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: "white", marginTop: "20px" }}>TravelMate</h2>

      <div style={styles.cityBar}>
        <p style={{
          padding: "8px 18px",
          background: "#013A63",
          borderRadius: "20px",
          cursor:"pointer",
        }} onClick={() => navigate("/bangalore")}>Bangalore</p>
         <p style={{
          padding: "8px 18px",
          background: "#013A63",
          borderRadius: "20px",
          cursor:"pointer",
        }} onClick={() => navigate("/chennai")}>Chennai</p>
         <p style={{
          padding: "8px 18px",
          background: "#013A63",
          borderRadius: "20px",
          cursor:"pointer",
        }} onClick={() => navigate("/kanyakumari")}>Kanyakumari</p>
      </div>


      <img style={styles.img} src={tour} alt="tour" />

      <TouristExperience />
    </div>
  );
}

export default Homepage;
