import styles from "./CardSeven.module.css"

const CardSeven = (props) => {
  return (
    <>
      {" "}
      <div className={styles.card} dir="ltr">
        <div className={styles.upper}>
          <div>{props.name}</div>
        </div>
        <div className={styles.lower}>
          <div>
            <h4>{props.name}</h4>
          </div>
          <div className={styles.lower__bot}>
            <div className={styles.lower__bot__left}>
              <div>{props.location}</div>
              <div>{props.email}</div>
            </div>
            <div className={styles.lower__bot__left}>
              <div>{props.firstNum + (props.secondNum ? " ," + props.secondNum : "")}</div>
              <div>{props.site}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSeven;
