import styles from "./Location.module.css";

const Location = () => {
  return (
    <section className={styles.container}>
      <div className={styles.copy}>
        <h1>
          Gluten free restaurants in
          <br />
          <span className={styles.location}>Clapham, London</span>
        </h1>
        <p>Looking for a great gluten free food near Clapham, London?</p>
        <p>
          Gluten Free Advisor has 10 great restaurants to chose from, covering
          Pizza, Burgers and Pub Food.
        </p>
      </div>
    </section>
  );
};

export default Location;
