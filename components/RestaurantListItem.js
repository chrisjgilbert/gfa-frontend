import Link from "next/link";

const RestaurantListItem = ({ id, name, address, cuisines }) => {
  return (
    <li>
      <Link href={`/restaurants/${id}`}>
        <a>
          <h3>{name}</h3>
          <p>{address}</p>
          <ul>
            {cuisines.map((cuisine) => (
              <li key={cuisine.id}>{cuisine.name}</li>
            ))}
          </ul>
        </a>
      </Link>
    </li>
  );
};

export default RestaurantListItem;
