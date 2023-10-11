import { useState } from "react";

import Aside from "../../components/destination/Aside";

import "./Destination.sass";
import Moon from "../../assets/destination/image-moon.png";
import Mars from "../../assets/destination/image-mars.png";
import Europa from "../../assets/destination/image-europa.png";
import Titan from "../../assets/destination/image-titan.png";

const Destination = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndex = (i) => {
    setSelectedIndex(i);
  };

  const destinations = [
    {
      name: "Moon",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ];
  const getImageUrl = () => {
    switch (selectedIndex) {
      case 0:
        return Moon;
      case 1:
        return Mars;
      case 2:
        return Europa;
      case 3:
        return Titan;
      default:
        return Moon;
    }
  };
  return (
    <main className="destination-page">
      <div className="divider"></div>
      <div className="content">
        <Aside
          moon={Moon}
          mars={Mars}
          europa={Europa}
          titan={Titan}
          wichShouldShow={handleIndex}
        />

        <div className="image">
          <img src={getImageUrl()} alt={destinations[selectedIndex].name} />
        </div>

        <div className="relative-text">
          <h1>{destinations[selectedIndex].name}</h1>
          <p>{destinations[selectedIndex].description}</p>
          <h4>Distance: {destinations[selectedIndex].distance}</h4>
          <h5>Travel Time: {destinations[selectedIndex].travel}</h5>
        </div>
      </div>
    </main>
  );
};

export default Destination;
