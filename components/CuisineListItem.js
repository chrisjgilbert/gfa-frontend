import styles from "./CuisineListItem.module.css";

const CuisineListItem = ({ name }) => {
  return (
    <li className={styles.container}>
      <span className={styles.copy}>{name}</span>
    </li>
  );
};

export default CuisineListItem;
