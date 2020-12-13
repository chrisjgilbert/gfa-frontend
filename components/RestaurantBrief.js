import Image from "next/image";

import styles from "./RestaurantBrief.module.css";

const Restaurantbrief = ({ name, address }) => {
  const imageSrc = () => {
    return `/${name.split(" ").join("-")}.png`;
  };
  return (
    <section>
      <h1>{name}</h1>
      <p>{address}</p>
      <span>££</span>

      <Image src={imageSrc()} alt={name} height="300" width="300" />
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
    </section>
  );
};

export default Restaurantbrief;
