import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Location from "../Components/Location";

import { TripContext } from "..";
const Home = () => {
  const { travelData } = useContext(TripContext);

  return (
    <div className="main">
      <div>
        <h2>Top Continents for your next holiday.</h2>
        <div className="list">
          {travelData.map((e) => (
            <Link to={`/countries/${e.name}`} key={e.id}>
              <Location image={e.image} name={e.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
