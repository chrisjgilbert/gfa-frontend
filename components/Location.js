import styles from "./Location.module.css";

const Location = () => {
  return (
    <section className={styles.container}>
      <div className={styles.copy}>
        <h1>
          Gluten free restaurants in{" "}
          <span className={styles.location}>Clapham, London</span>
        </h1>
        <p>Looking for a great gluten free food near Clapham, London?</p>
        <p>
          Gluten Free Advisor has 10 great restaurants to chose from, covering
          Pizza, Burgers and Pub Food.
        </p>
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4971.179330965514!2d-0.14530017049506533!3d51.46568986851339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876044d62bf2975%3A0x4a559fd204ac1a39!2sClapham%20Town%2C%20London!5e0!3m2!1sen!2suk!4v1607777063489!5m2!1sen!2suk"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          styles={styles.iframe}
        />
      </div>
    </section>
  );
};

export default Location;
