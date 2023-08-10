import { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { TripContext } from "..";
const DestinationDetails = () => {
  const { destinations } = useContext(TripContext);

  const { destination } = useParams();

  const selectedDestination = destinations.find((e) => e.name === destination);

  const navigate = useNavigate();

  return (
    <div className="details--div">
      {/* <Link to={`destinations`}>Back</Link> */}

      <button onClick={() => navigate(-1)}>Back</button>

      <h1>{selectedDestination?.name}</h1>
      <div className="details">
        <div>
          <img
            src={selectedDestination?.image}
            alt={selectedDestination?.name}
          />
        </div>
        <div>
          <p>
            <strong>Description: </strong>
            {selectedDestination?.description}
          </p>
          <p>
            <strong>Ratings: </strong>
            {selectedDestination?.ratings}
          </p>
          <p>
            <strong>Reviews: </strong>
            {selectedDestination?.reviews}
          </p>
          <p>
            <strong>Location: </strong>
            {selectedDestination?.location}
          </p>
          <p>
            <strong>Opening hours: </strong>
            {selectedDestination?.openingHours}
          </p>
          <p>
            <strong> Ticket Price: </strong>
            {selectedDestination?.ticketPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
