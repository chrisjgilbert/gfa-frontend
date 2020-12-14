import Link from "next/link";
import Image from "next/image";
import StarRatingComponent from "react-star-rating-component";

import styles from "./RestaurantListItem.module.css";

const RestaurantListItem = ({ id, name, address, cuisines, averageRating }) => {
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
                emptyStarColor={"lightgray"}
                starCount={5}
                name={name}
                value={averageRating}
              />
            </span>
            <span>££</span>
            <span>{cuisines.map((cuisine) => cuisine.name)}</span>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <Image
                  className={styles.image}
                  src={"/gf-icon.png"}
                  alt="Takeaway available"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className={styles.icon}>
                <Image
                  className={styles.image}
                  src={"/takeaway-icon.svg"}
                  alt="Takeaway available"
                  height="100%"
                  width="100%"
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
