import { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { TripContext } from "..";
import Location from "../Components/Location";

const Countries = () => {
  const { travelData, countries, setCountries } = useContext(TripContext);
  const [selectedContinent, setselectedContinent] = useState({});

  const { continent } = useParams();

  useEffect(() => {
    const selectedContinentData = travelData.find((e) => e.name === continent);
    setselectedContinent(selectedContinentData);
    setCountries(selectedContinentData.countries);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="main">
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <h2>
          Toop countries in {selectedContinent.name} for your next holiday.
        </h2>
        <div className="list">
          {countries?.map((e) => (
            <Link to={`/destinations/${e.name}`} key={e.id}>
              <Location image={e.image} name={e.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
