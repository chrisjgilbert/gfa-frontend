import Link from "next/link";
import Image from "next/image";
import StarRatingComponent from "react-star-rating-component";

import CuisineListItem from "./CuisineListItem";

import styles from "./RestaurantListItem.module.css";

const RestaurantListItem = ({
  id,
  name,
  address,
  cuisines,
  reviewsCount,
  averageRating,
}) => {
  const imageSrc = () => {
    return `/${name.split(" ").join("-")}.png`;
  };
  return (
    <li className={styles.card}>
      <Link href={`/restaurants/${id}`}>
        <a className={styles.link}>
          <div className={styles.infoContainer}>
            <h3 className={styles.title}>{name}</h3>
            <span>{address.split(", ")[0]}</span>
            <span>
              <StarRatingComponent
                starColor={"#444444"}
                emptyStarColor={"#eeeeee"}
                starCount={5}
                value={averageRating}
              />
            </span>
            <span>££</span>
            <span>{cuisines.map((cuisine) => cuisine.name)}</span>
            <div className={styles.takeoutContainer}>
              <div className={styles.takeoutOption}>
                <Image
                  src={"/deliveroo.png"}
                  alt="Deliveroo"
                  objectFit="contain"
                  height="32"
                  width="32"
                  size="fill"
                />
              </div>
            </div>
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
