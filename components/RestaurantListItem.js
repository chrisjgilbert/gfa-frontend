const RestaurantListItem = ({ name, address, cuisines }) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{address}</p>
      <ul>
        {cuisines.map((cuisine) => (
          <li key={cuisine.id}>{cuisine.name}</li>
        ))}
      </ul>
    </li>
  );
};

export default RestaurantListItem;
