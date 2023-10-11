import './AsideTechnology.sass'

// eslint-disable-next-line react/prop-types
const Aside = ({ wichShouldShow }) => {
  const handleChange = (imageName) => {
    wichShouldShow(imageName);
  };

  return (
    <aside className="aside-technology">
      <ul>
        <li onClick={() => handleChange(0)}>1</li>
        <li onClick={() => handleChange(1)}>2</li>
        <li onClick={() => handleChange(2)}>3</li>
      </ul>
    </aside>
  );
};

export default Aside;
