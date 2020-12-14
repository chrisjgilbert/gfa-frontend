import Image from "next/image";

import styles from "./RestaurantBrief.module.css";

const Restaurantbrief = ({ name, address }) => {
  const imageSrc = () => {
    return `/${name.split(" ").join("-")}.png`;
  };

  const cuisineTags = () => {
    const cuisines = ["Italian", "Pizza"];
    return cuisines.map((cuisine, index) => {
      return (
        <span key={index} className={styles.cuisineTag}>
          {cuisine}
        </span>
      );
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.detailsContainer}>
        <h1 className={styles.title}>
          {name} {cuisineTags()}
        </h1>
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
              src={"/booking.svg"}
              alt="Deliveroo"
              height={32}
              width={32}
            />
          </div>
          <span>
            <a href="https://www.pizzaexpress.com/clapham-junction">
              Online booking
            </a>{" "}
            available
          </span>
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
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.210183317765!2d-0.14239478415333168!3d51.45429732240524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876044ad68dcb6d%3A0xb72c62714734a17e!2sPizza%20Express!5e0!3m2!1sen!2suk!4v1607943026010!5m2!1sen!2suk"
          width="300"
          height="300"
          frameborder="0"
        />
      </div>
    </section>
  );
};

export default Restaurantbrief;
