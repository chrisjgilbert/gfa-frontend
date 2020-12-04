import RestaurantListItem from "./RestaurantListItem";

const data = [
  {
    id: 1,
    name: "Pizza Express",
    description: "Somewhere over the pizza",
    rating: 5,
    cuisines: ["Pizza"],
    reviews: ["yep", "ok"],
  },
  {
    id: 2,
    name: "Franco Manca",
    description: "Somewhere over the rainbox",
    rating: 4.5,
    cuisines: ["Pizza", "Italian"],
    reviews: ["nice", "not bad"],
  },
  {
    id: 3,
    name: "Honest Burgers",
    description: "Blah Blah Blah somewhere over the rainbox",
    rating: 4,
    cuisines: ["Burgers"],
    reviews: ["average"],
  },
];

const RestaurantList = () => {
  return (
    <section>
      <ul>
        {data.map((restaurant) => (
          <RestaurantListItem {...restaurant} />
        ))}
      </ul>
    </section>
  );
};

export default RestaurantList;
