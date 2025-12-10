
function Places(props) {


    const stars = "⭐".repeat(props.rating);
    const styles = {
        card: {

            margin: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "linear-gradient(135deg, #A6D3FF, #0A2A43)",
            color: "white",
            borderRadius: "10px",
            padding: "15px",

        },
        leftside: {
            width: "70%",

            display: "flex",
            justifyContent: "space-around"
        },
        rightside: {
            width: "250px"
        },

        images: {
            width: "50%",
            height: "250px",
            objectFit: "cover",

        }


    }
    return (

        <div style={styles.card}>
            <div style={styles.leftside}>
                <img style={styles.images} src={props.image} />
                <img style={styles.images} src={props.image2} />
            </div>
            <div style={styles.rightside}>
                <h3>{props.place}</h3>
                <h3>{props.location}</h3>
                <h4>{props.distance}</h4>
                <h3>{stars}</h3>
            </div>

        </div>
    );
}

export default Places;
