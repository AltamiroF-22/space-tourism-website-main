import "./Technology.sass";
import Aside from "../../components/technology/Aside";
import { useState } from "react";

//images

import LaunchVehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import Spaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import SpaceCapsule from "../../assets/technology/image-space-capsule-portrait.jpg";

const Technology = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndex = (i) => {
    setSelectedIndex(i);
  };

  const getImageUrl = () => {
    switch (selectedIndex) {
      case 0:
        return SpaceCapsule;
      case 1:
        return Spaceport;
      case 2:
        return LaunchVehicle;

      default:
        return SpaceCapsule;
    }
  };

  const technoloçy = [
    {
      name: "Space capsule",
      portrait: "../../assets/technology/image-space-capsule-portrait.jpg",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
    {
      name: "Launch vehicle",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      portrait: "../../assets/technology/image-spaceport-portrait.jpg",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
  ];

  return (
    <main className="technology-page">
      <div className="divider"></div>

      <div className="content">
        
        <div className="relative-text">
          <p>{technoloçy[selectedIndex].description}</p>
          <Aside wichShouldShow={handleIndex} />
        </div>

        <div className="image">
          <h1>{technoloçy[selectedIndex].name}</h1>
          <div className="image-div">
          <img src={getImageUrl()} alt={technoloçy[selectedIndex].name} />

          </div>
        </div>
      </div>
    </main>
  );
};

export default Technology;
