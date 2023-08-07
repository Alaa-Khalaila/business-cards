import styles from "./CardSix.module.css";

const CardSix = (props) => {
  return (
    <>
      <div className={styles.card} dir="ltr">
        <div className={styles.upper}>
        </div>
        <div className={styles.lower}>
          <div>
            <h4>{props.name}</h4>
          </div>
          <div className={styles.lower__bot}>
            <div className={styles.lower__bot__left}>
              <div className={styles.section}>
                <div>{props.firstNum}</div>
                <div>{props.secondNum}</div>
              </div>
              <div className={styles.section}>
                <div>{props.email}</div>
                <div>{props.site}</div>
              </div>
              <div className={styles.location}>{props.location}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSix;
