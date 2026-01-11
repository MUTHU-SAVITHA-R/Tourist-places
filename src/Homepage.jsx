import { useNavigate } from "react-router-dom";
import tour from "./assets/tour.jpg";
import TouristExperience from "./TouristExperience";

function Homepage() {
  const navigate = useNavigate();

  const styles = {
    container: {
      textAlign: "center",
      marginTop: "0px",
      background: "linear-gradient(135deg, #013A63, #89CFF0)",
      minHeight: "100vh",
      overflowX: "hidden",
      paddingBottom: "40px"
    },
    cityBar: {
      background: "#0A2A43",
      color: "white",
      padding: "10px",
      borderRadius: "15px",
      display: "flex",
      justifyContent: "space-around",
      maxWidth: "600px",
      margin: "20px auto",
      cursor: "pointer"
    },
    img: {
      width: "90%",
      maxWidth: "800px",
      borderRadius: "15px"
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: "white", marginTop: "20px" }}>TravelMate</h2>

      <div style={styles.cityBar}>
        <p onClick={() => navigate("/bangalore")}>Bangalore</p>
        <p onClick={() => navigate("/chennai")}>Chennai</p>
        <p onClick={() => navigate("/kanyakumari")}>Kanyakumari</p>
      </div>


      <img style={styles.img} src={tour} alt="tour" />

      <TouristExperience />
    </div>
  );
}

export default Homepage;
