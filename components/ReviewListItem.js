import Image from "next/image";
import StarRatingComponent from "react-star-rating-component";

import styles from "./ReviewListItem.module.css";

const ReviewListItem = ({
  user,
  date,
  content,
  rating,
  glutenFreeRange,
  value,
  service,
}) => {
  return (
    <li className={styles.card}>
      <div className={styles.userInfo}>
        <div className={styles.avatarContainer}>
          <Image src="/user-avatar.png" width="48" height="48" />
        </div>
        <div className={styles.username}>{user}</div>
        <div className={styles.userReviewCount}>4 reviews</div>
      </div>
      <div className={styles.reviewContainer}>
        <div className={styles.header}>
          <span className={styles.date}>Date of visit: {date}</span>
          <div className={styles.ratingContainer}>
            <StarRatingComponent
              className={styles.stars}
              starColor={"#444444"}
              emptyStarColor={"lightgray"}
              starCount={5}
              name={rating}
              value={rating}
            />
          </div>
        </div>
        <p>{content}</p>
        <div className={styles.ratingContainer}>
          <div className={styles.rating}>
            <StarRatingComponent
              className={styles.stars}
              starColor={"#444444"}
              emptyStarColor={"lightgray"}
              starCount={5}
              name={glutenFreeRange}
              value={glutenFreeRange}
            />
            <span className={styles.ratingCategory}>Gluten free range</span>
          </div>
          <div className={styles.rating}>
            <StarRatingComponent
              className={styles.stars}
              starColor={"#444444"}
              emptyStarColor={"lightgray"}
              starCount={5}
              name={value}
              value={value}
            />
            <span className={styles.ratingCategory}>Value</span>
          </div>
          <div className={styles.rating}>
            <StarRatingComponent
              className={styles.stars}
              starColor={"#444444"}
              emptyStarColor={"lightgray"}
              starCount={5}
              name={service}
              value={service}
            />
            <span className={styles.ratingCategory}>Service</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ReviewListItem;
