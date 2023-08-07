import styles from "./CardThree.module.css";

const CardThree = (props) => {
  return (
    <>
      <div className={styles.card} dir="ltr">
        <div className={styles.upper}>
          <div>{props.name}</div>
        </div>
        <div className={styles.lower}>
          <div className={styles.lower__bot}>
            <div className={styles.lower__bot__left}>
              <div className={styles.location}>{props.location}</div>
              <div>{props.firstNum}</div>
              <div>{props.email}</div>
              <div>{props.site}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardThree;
