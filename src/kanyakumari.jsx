import { useState, useEffect } from "react";
import Places from "./places";

import thiru from "./assets/thiru.jpg";
import thiru2 from "./assets/thiru2.jpg";
import valluvar from "./assets/vallluvar.jpeg";
import valluvar2 from "./assets/valluvar2.jpeg";
import vive from "./assets/vive.jpeg";
import vive2 from "./assets/vive2.jpg";

function Kanyakumari({ search }) {

  const allPlaces = [
    {
      id: 1,
      place: "Thiruparappu Falls",
      location: "Near Kulasekharam, Kanyakumari District",
      distance: "15–20 km from central Kanyakumari town",
      rating: 5,
      image: thiru,
      image2: thiru2
    },
    {
      id: 2,
      place: "Thiruvalluvar Statue",
      location: "Off-shore, close to the Kanyakumari coast",
      distance: "Near Kanyakumari beach area",
      rating: 5,
      image: valluvar,
      image2: valluvar2
    },
    {
      id: 3,
      place: "Vivekananda Rock Memorial",
      location: "On a nearby islet, reachable by ferry from Kanyakumari",
      distance: "Few minutes ferry ride from mainland",
      rating: 5,
      image: vive,
      image2: vive2
    }
  ];
   allPlaces.sort((x,y)=> y.rating-x.rating)
  const [places, setPlaces] = useState(allPlaces);
  useEffect(()=>{
    
     window.scrollTo({ top: 0, behavior: "smooth" });
  })
  
  useEffect(() => {
    if (!search || search.trim() === "") {
      setPlaces(allPlaces);
      return;
    }

    const filtered = allPlaces.filter(item =>
      item.place.toLowerCase().includes(search.toLowerCase())
    );
    setPlaces(filtered);
  }, [search]);

  return (
    <>
      {places.length > 0 ? (
        places.map(p => (
          <Places
            key={p.id}
            place={p.place}
            location={p.location}
            rating={p.rating}
            distance={p.distance}
            image={p.image}
            image2={p.image2}
          />
        ))
      ) : (
        <p>Place Not Found</p>
      )}
    </>
  );
}

export default Kanyakumari;
