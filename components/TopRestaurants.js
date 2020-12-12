import RestaurantListItem from "./RestaurantListItem";

const TopRestaurants = ({ eateries }) => {
  return (
    <section>
      <h2>
        Top gluten free restaurants in Clapham, London ({eateries.length})
      </h2>
      <ul>
        {eateries.map((eatery) => (
          <RestaurantListItem key={eatery.id} {...eatery.attributes} />
        ))}
      </ul>
    </section>
  );
};

export default TopRestaurants;
