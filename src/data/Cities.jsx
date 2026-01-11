import thiru from "../assets/thiru.jpg";
import thiru2 from "../assets/thiru2.jpg";
import valluvar from "../assets/vallluvar.jpeg";
import valluvar2 from "../assets/valluvar2.jpeg";
import vive from "../assets/vive.jpeg";
import vive2 from "../assets/vive2.jpg";
import coorgb from "../assets/coorgb.jpg"; 
import coorgb2 from "../assets/coorgb2.jpg"; 
import lalbaghb from "../assets/lalbaghb.webp"; 
import lalbaghb2 from "../assets/lalbaghb2.webp"; 
import bennarghatta from "../assets/bennarghatta.avif"; 
import bennarghatta2 from "../assets/bennarghatta2.jpg"; 
import marina from "../assets/marina.avif";
import marina2 from "../assets/marina2.jpg";
import maha from "../assets/maha.jpg";
import maha2 from "../assets/maha2.jpeg";
import vedan from "../assets/vedan.jpg";
import vedan2 from "../assets/vedan2.jpg";
export const cities = [
  {
    id: "kanyakumari",
    name: "Kanyakumari",
    places: [
      {
        id: 1,
        place: "Thiruparappu Falls",
        location: "Near Kulasekharam",
        distance: "15–20 km",
        rating: 5,
        image: thiru,
        image2: thiru2
      },
      {
        id: 2,
        place: "Thiruvalluvar Statue",
        location: "Near Kanyakumari beach",
        distance: "Near shore",
        rating: 5,
        image: valluvar,
        image2: valluvar2
      },
      {
        id: 3,
        place: "Vivekananda Rock",
        location: "Off the coast",
        distance: "Ferry ride",
        rating: 5,
        image: vive,
        image2: vive2
      }
    ]
  },

  {
    id: "bangalore",
    name: "Bangalore",
    places: [
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
    ]
  },

  {
    id: "chennai",
    name: "Chennai",
    places: [
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
    ]
  }
];
