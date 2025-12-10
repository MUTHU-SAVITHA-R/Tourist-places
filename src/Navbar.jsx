import { useNavigate } from "react-router-dom";
function Navbar(props) {
  const navigate = useNavigate();
  const styles = {
    nav: {
      display: "flex",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex:"10",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "10px",
      background: "linear-gradient(135deg, #0A2A43, #A6D3FF)",

    },
    leftGroup: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    rightGroup: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    h4: {
      padding: "5px",
      color: "white",
      cursor: "pointer",
    },
    button: {
      borderRadius: "15px",
      padding: "6px 12px",
      border: "1px solid gray",
      background: "white",
      cursor: "pointer",
    },
    input: {
      width: "500px",
      padding: "8px",
      borderRadius: "20px",
      border: "1px solid #ccc",
      fontSize: "15px",
    }
  };
  function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }
  function goHome() {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function gologin(){
     navigate("/login");
     window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  function handlesearch(event) {
    props.setSearch(event.target.value)
  }
  return (
    <>
      <nav style={styles.nav}>

        <div style={styles.rightGroup}>
          <input style={styles.input} type="text" placeholder="Search places..."
            value={props.search} onChange={handlesearch} />

        </div>
        <div style={styles.leftGroup}>
          <h4 style={styles.h4} onClick={goHome}>Home </h4>
          <h4 style={styles.h4} onClick={scrollToAbout}>About</h4>
          
          <button style={styles.button} onClick={gologin}>Login</button>
          <button style={styles.button}>Signup</button>
        </div>


      </nav>
    </>
  );
}
export default Navbar;
