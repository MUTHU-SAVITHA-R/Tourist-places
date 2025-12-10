import { useState, useEffect } from "react";
import Places from "./Places";

import marina from "./assets/marina.avif";
import marina2 from "./assets/marina2.jpg";
import maha from "./assets/maha.jpg";
import maha2 from "./assets/maha2.jpeg";
import vedan from "./assets/vedan.jpg";
import vedan2 from "./assets/vedan2.jpg";

function State2({ search }) {

  const allPlaces = [
    {
      id: 1,
      place: "Marina Beach",
      location: "Near Fort St. George, Chennai, Tamil Nadu",
      distance: "Around 5 km (depending on starting point)",
      rating: 4,
      image: marina,
      image2: marina2
    },
    {
      id: 2,
      place: "Mahabalipuram",
      location: "A historic coastal town on the Bay of Bengal, Tamil Nadu",
      distance: "~ 60–65 km by road from Chennai",
      rating: 5,
      image: maha,
      image2: maha2
    },
    {
      id: 3,
      place: "Vedanthangal Bird Sanctuary",
      location: "Vedanthangal village, Tamil Nadu",
      distance: "Around 75–90 km from Chennai",
      rating: 3,
      image: vedan,
      image2: vedan2
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

export default State2;
