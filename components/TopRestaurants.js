import RestaurantFilters from "./RestaurantFilters";
import RestaurantListItem from "./RestaurantListItem";

import styles from "./TopRestaurants.module.css";

const TopRestaurants = ({ eateries }) => {
  return (
    <section>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Top gluten free restaurants in Clapham, London ({eateries.length})
        </h2>
      </header>
      <RestaurantFilters />
      <ul className={styles.listContainer}>
        {eateries.map((eatery) => (
          <RestaurantListItem key={eatery.id} {...eatery.attributes} />
        ))}
      </ul>
    </section>
  );
};

export default TopRestaurants;
