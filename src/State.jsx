import { useState, useEffect } from "react";
import Places from "./places";
import coorgb from "./assets/coorgb.jpg"; 
import coorgb2 from "./assets/coorgb2.jpg"; 
import lalbaghb from "./assets/lalbaghb.webp"; 
import lalbaghb2 from "./assets/lalbaghb2.webp"; 
import bennarghatta from "./assets/bennarghatta.avif"; 
import bennarghatta2 from "./assets/bennarghatta2.jpg"; 

function State({ search }) {

  const allPlaces = [
    {
      id: 1,
      place: "Coorg",
      location: "Madikeri, Coorg, Karnataka.",
      distance: "~ 265 km by road from Bangalore",
      rating: 5,
      image: coorgb,
      image2: coorgb2
    },
    {
      id: 2,
      place: "Lalbagh Botanical Garden",
      location: "Mavalli (on Lalbagh Road), Bengaluru",
      distance: "~ 4-7 km from city-centre",
      rating: 4,
      image: lalbaghb,
      image2: lalbaghb2
    },
    {
      id: 3,
      place: "Bannerghatta National Park",
      location: "Bannerghatta Road, Bengaluru",
      distance: "~ 22 km from Bangalore",
      rating: 5,
      image: bennarghatta,
      image2: bennarghatta2
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
            distance={p.distance}
            rating={p.rating}
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

export default State;
