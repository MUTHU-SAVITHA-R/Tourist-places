import { useNavigate } from "react-router-dom";
import tour from './assets/tour.jpg';

function Homepage() {
    const navigate = useNavigate();

    const styles = {
        container: {
            position: "relative",
            textAlign: "center",
            marginTop: "15px",
            background: "linear-gradient(135deg, #013A63, #89CFF0)"
        },
        div: {
            position: "ABSOLUTE",
            bottom: "2vh",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            maxWidth: "600px",
            height: "60px",
            background: "#0A2A43",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "8px"
        },
        p: {
            color: "white",
            cursor: "pointer"
        },
        img: {
             borderRadius: "15px",

        }
    }

    return (
        <div style={styles.container}>
            <h2 style={{color:"white",marginTop:"100px"}}>TravelMate</h2>

            <div style={styles.div}>
                <p style={styles.p} onClick={() => navigate("/bangalore")}>Bangalore</p>
                <p style={styles.p} onClick={() => navigate("/chennai")}>Chennai</p>
                <p style={styles.p} onClick={() => navigate("/kanyakumari")}>Kanyakumari</p>
            </div>

            <img style={styles.img} src={tour} alt="" />
        </div>
    );
}

export default Homepage;
