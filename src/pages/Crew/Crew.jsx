import "./Crew.sass";
import Aside from '../../components/crew/Aside'
import { useState } from "react";

//images
import DouglasHurley from "../../assets/crew/image-douglas-hurley.png";
import MarkShuttleworth from "../../assets/crew/image-mark-shuttleworth.png";
import VictorGlover from "../../assets/crew/image-victor-glover.png";
import AnoushehAnsari from "../../assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndex = (i) => {
    setSelectedIndex(i);
  };
  const getImageUrl = () => {
    switch (selectedIndex) {
      case 0:
        return DouglasHurley;
      case 1:
        return MarkShuttleworth;
      case 2:
        return VictorGlover;
      case 3:
        return AnoushehAnsari;
      default:
        return DouglasHurley;
    }
  };
  const crew = [
    {
      name: "Douglas Hurley",
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];
  return (
    <main className="crew-page">
      <div className="divider"></div>
      <div className="content">
        <Aside wichShouldShow={handleIndex} />
        <div className="image">
          <img src={getImageUrl()} alt={crew[selectedIndex].name} />
        </div>

        <div className="relative-text">
          <h1>{crew[selectedIndex].name}</h1>
          <h5>Role: {crew[selectedIndex].role}</h5>
          <p>Bio:{crew[selectedIndex].bio}</p>
        </div>
      </div>
    </main>
  );
};

export default Crew;
