import Image from "next/image";

import styles from "./RestaurantBrief.module.css";

const Restaurantbrief = ({ name, address }) => {
  const imageSrc = () => {
    return `/${name.split(" ").join("-")}.png`;
  };

  return (
    <section className={styles.container}>
      <div className={styles.detailsContainer}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.addressContainer}>
          <div className={styles.iconContainer}>
            <Image
              styles={styles.icon}
              src={"/pin.svg"}
              alt="Deliveroo"
              height={32}
              width={32}
            />
          </div>
          {address}
        </div>
        <div className={styles.budgetContainer}>
          <div className={styles.iconContainer}>
            <Image
              styles={styles.icon}
              src={"/budget.svg"}
              alt="Deliveroo"
              height={32}
              width={32}
            />
          </div>
          <span>Expect meals to cost in the region of £15 per head.</span>
        </div>
        <div className={styles.budgetContainer}>
          <div className={styles.iconContainer}>
            <Image
              styles={styles.icon}
              src={"/takeaway-icon.svg"}
              alt="Deliveroo"
              height={32}
              width={32}
            />
          </div>
          <span>
            Takeaway available at{" "}
            <a href="https://deliveroo.co.uk/menu/london/clapham-junction/clapham-lavender-hill-pizza-express">
              Deliveroo
            </a>
          </span>
        </div>
        <div className={styles.contactContainer}>
          <h6 className={styles.subTitle}>Contact</h6>
          <a href="https://www.pizzaexpress.com/clapham-junction">
            <Image
              styles={styles.icon}
              src={"/website.svg"}
              alt="Deliveroo"
              height={32}
              width={32}
            />
          </a>
          <a href="https://www.pizzaexpress.com/clapham-junction">
            <Image
              styles={styles.icon}
              src={"/instagram.svg"}
              alt="Deliveroo"
              height={32}
              width={32}
            />
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={imageSrc()} alt={name} height={300} width={300} />
      </div>
    </section>
  );
};

export default Restaurantbrief;
