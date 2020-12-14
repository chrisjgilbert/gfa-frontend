import { useState } from "react";

import styles from "./RestaurantFilters.module.css";

const cuisines = [
  { value: "All cuisines", label: "All" },
  { value: "Pizza", label: "Pizza" },
  { value: "Burgers", label: "Burgers" },
];
const ratings = [
  { value: "All ratings", label: "All" },
  { value: "4", label: "4+" },
  { value: "3", label: "3+" },
  { value: "2", label: "2+" },
  { value: "1", label: "1+" },
];

const RestaurantFilters = () => {
  const [showCuisineOpts, setShowCuisineOpts] = useState(false);

  const handleOnPress = () => {
    setShowCuisineOpts(!showCuisineOpts);
  };

  return (
    <section className={styles.container}>
      <div className={styles.filtersContainer}>
        <button className={styles.button} onClick={handleOnPress}>
          Cuisines
        </button>
        <div className={showCuisineOpts ? styles.checkboxContainer : undefined}>
          {showCuisineOpts &&
            cuisines.map((cuisine) => (
              <label htmlFor={cuisine.id}>
                <input
                  key={cuisine.id}
                  type="checkbox"
                  name={cuisine.label}
                  id={cuisine.id}
                />
                <span styles={styles.checkboxLabel}>{cuisine.label}</span>
              </label>
            ))}
        </div>
        <button className={styles.button} onClick={handleOnPress}>
          Rating
        </button>
        <button className={styles.button} onClick={handleOnPress}>
          Price
        </button>
        <button className={styles.button} onClick={handleOnPress}>
          Acredited by Celiac UK
        </button>
        <button className={styles.button} onClick={handleOnPress}>
          Takeaway available
        </button>
      </div>
      <div className={styles.dropdownContainer}>
        <select
          className={(styles.select, styles.button)}
          name="order"
          id="order"
        >
          <option value="rating-asc">Highest Rating</option>
          <option value="rating-sec">Lowest Rating</option>
          <option value="date-asc">Date added</option>
          <option value="review-count">Review count</option>
        </select>
      </div>
    </section>
  );
};

export default RestaurantFilters;
