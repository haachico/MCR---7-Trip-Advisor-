import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { TripContext } from "..";
import Location from "../Components/Location";

const Destinations = () => {
  const { travelData, countries, destinations, setDestinations } = useContext(
    TripContext
  );

  const [selectedCountry, setSelectedCountry] = useState({});

  const { country } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const selectedCountryData = countries.find((e) => e.name === country);
    setSelectedCountry(selectedCountryData);
    setDestinations(selectedCountryData?.destinations);
  }, []);

  return (
    <div className="main">
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <h2>
          Top destinations in {selectedCountry.name} for your next holiday.
        </h2>
        <div className="list">
          {destinations?.map((e) => (
            <Link to={`/details/${e.name}`} key={e.id}>
              <Location image={e.image} name={e.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
