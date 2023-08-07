import styles from "./CardFive.module.css";

const CardFive = (props) => {
  return (
    <>
      <div className={styles.card} dir="ltr">
        <div className={styles.upper}>
          <div>{props.name}</div>
        </div>
        <div className={styles.lower}>
          <div className={styles.lower__bot}>
            <div className={styles.lower__bot__left}>
              <div className={styles.name}>{props.name}</div>
              <div>
                <div>M: {props.firstNum}</div>
                <div>E: {props.email}</div>
              </div>
              <div>{props.location}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFive;
