import Link from "next/link";
import Image from "next/image";

import CuisineListItem from "./CuisineListItem";

import styles from "./RestaurantListItem.module.css";

const RestaurantListItem = ({ id, name, address, cuisines }) => {
  const imageSrc = () => {
    return `/${name.split(" ").join("-")}.png`;
  };
  return (
    <li className={styles.card}>
      <Link href={`/restaurants/${id}`}>
        <a className={styles.link}>
          <div className={styles.infoContainer}>
            <h3 className={styles.title}>{name}</h3>
            <p>{address}</p>
            <ul>
              {cuisines.map((cuisine) => (
                <CuisineListItem key={cuisine.id} {...cuisine} />
              ))}
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={imageSrc()}
              alt={name}
              height="100%"
              width="100%"
            />
          </div>
        </a>
      </Link>
    </li>
  );
};

export default RestaurantListItem;
