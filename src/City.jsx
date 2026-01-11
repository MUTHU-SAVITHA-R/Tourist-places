import { useParams } from "react-router-dom";
import { cities } from "./data/Cities";
import Places from "./Places";

function City({ search }) {
  const { cityId } = useParams();

  const city = cities.find(c => c.id === cityId);

  if (!city) return <h2>City not found</h2>;

  let places = city.places;

  if (search) {
    places = places.filter(p =>
      p.place.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <>
      <h2 style={{ textAlign: "center" }}>{city.name}</h2>

      {places.map(p => (
          <Places
            key={p.id}
            place={p.place}
            location={p.location}
            distance={p.distance}
            rating={p.rating}
            image={p.image}
            image2={p.image2}
          />
        ))}
    </>
  );
}

export default City;
