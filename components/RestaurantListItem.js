const RestaurantListItem = ({ id, name, rating, cuisines, reviews }) => {
  return (
    <li key={id}>
      <h3>{name}</h3>
      <p>
        Rating: {rating} ({reviews.length} reviews)
      </p>
      <ul>
        {cuisines.map((cuisine, index) => (
          <li key={index}>{cuisine}</li>
        ))}
      </ul>
    </li>
  );
};

export default RestaurantListItem;
