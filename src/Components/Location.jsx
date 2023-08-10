const Location = ({ image, name }) => {
  return (
    <div className="location">
      <img src={image} alt={name} />
      <div className="location--name">
        <span>
          <i class="fa-solid fa-location-dot"></i>
        </span>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Location;
