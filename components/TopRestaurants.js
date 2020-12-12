import RestaurantListItem from "./RestaurantListItem";

const TopRestaurants = ({ eateries }) => {
  return (
    <section>
      <h1>Top restaurants in Clapham, London ({eateries.length})</h1>
      <ul>
        {eateries.map((eatery) => (
          <RestaurantListItem key={eatery.id} {...eatery.attributes} />
        ))}
      </ul>
    </section>
  );
};

export default TopRestaurants;
