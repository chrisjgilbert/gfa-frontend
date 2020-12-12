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
  return (
    <section>
      <span>Cuisines</span>
      {cuisines.map((cuisine) => (
        <label htmlFor={cuisine.value}>
          <input
            type="checkbox"
            name={cuisines.label}
            id={cuisine.value}
            value={cuisines.value}
          />
          <span>{cuisine.label}</span>
        </label>
      ))}
      <span>Ratings</span>
      {ratings.map((rating) => (
        <label htmlFor={rating.value}>
          <input
            type="checkbox"
            name={ratings.label}
            id={rating.value}
            value={ratings.value}
          />
          <span>{rating.label}</span>
        </label>
      ))}
    </section>
  );
};

export default RestaurantFilters;
