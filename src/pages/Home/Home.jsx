import "./Home.sass";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-page">
      <div className="divider"></div>
      <div className="content">
        <div className="text">
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <span> SPACE </span>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link className="button" to="/destination">EXPLORE</Link>
      </div>
    </div>
  );
};

export default Home;
