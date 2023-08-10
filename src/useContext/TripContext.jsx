import { createContext, useState } from "react";
import { data } from "../db/data";

export const TripContext = createContext();

export const TripContextProvider = ({ children }) => {
  const [travelData, setTravelData] = useState(data.continents);
  const [countries, setCountries] = useState([]);
  const [destinations, setDestinations] = useState([]);

  return (
    <div>
      <TripContext.Provider
        value={{
          travelData,
          setTravelData,
          countries,
          setCountries,
          destinations,
          setDestinations
        }}
      >
        {children}
      </TripContext.Provider>
    </div>
  );
};
