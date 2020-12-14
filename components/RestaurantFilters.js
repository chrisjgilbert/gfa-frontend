import { useState } from "react";

import styles from "./RestaurantFilters.module.css";

const cuisines = [
  { id: 1, value: "Pizza", label: "Pizza" },
  { id: 2, value: "Burgers", label: "Burgers" },
];
const ratings = [
  { value: "All ratings", label: "All" },
  { value: "4", label: "4+" },
  { value: "3", label: "3+" },
  { value: "2", label: "2+" },
  { value: "1", label: "1+" },
];

const RestaurantFilters = ({ handleFilterChange, currentFilter }) => {
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
              <label key={cuisine.id} htmlFor={cuisine.id}>
                <input
                  type="checkbox"
                  name={cuisine.label}
                  value={cuisine.label}
                  id={cuisine.id}
                  checked={currentFilter === cuisine.label}
                  onChange={handleFilterChange}
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
          <option value="rating asc">Highest Rating</option>
          <option value="rating dec">Lowest Rating</option>
          <option value="date-asc">Date added</option>
          <option value="review-count">Review count</option>
        </select>
      </div>
    </section>
  );
};

export default RestaurantFilters;
