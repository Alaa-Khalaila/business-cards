import styles from "./CardTen.module.css";

const CardTen = (props) => {
  return (
    <>
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
              <div>M: {props.firstNum}</div>
              <div>E: {props.email}</div>
              <div className={styles.location}>{props.location}</div>
            </div>
            <div className={styles.left__name}>{props.name}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTen;
