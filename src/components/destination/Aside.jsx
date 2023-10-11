import "./AsideDesti.sass";

// eslint-disable-next-line react/prop-types
const Aside = ({ moon, mars, europa, titan, wichShouldShow }) => {
  const handleChange = (imageName) => {
    wichShouldShow(imageName);
  };

  return (
    <aside className="aside-desti">
      <ul>
        <img onClick={() => handleChange(0)} src={moon} alt="Moon" />
        <img onClick={() => handleChange(1)} src={mars} alt="Mars" />
        <img onClick={() => handleChange(2)} src={europa} alt="Europa" />
        <img onClick={() => handleChange(3)} src={titan} alt="Titan" />
      </ul>
    </aside>
  );
};

export default Aside;
