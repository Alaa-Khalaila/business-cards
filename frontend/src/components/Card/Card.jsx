import Button from "../Button/Button"
import styles from "./Card.module.css"

function Card(props){
    return(
        <div className={styles.card}>
            <header className={styles.card__header}>
                <img src={props.img} alt="" className={styles.card__img}/>
            </header>
            <main className={styles.card__main}>
                <h4>Business Card</h4>
            </main>
            <footer className={styles.card__footer}>
                <span>1 JD</span>
                <Button text="+"></Button>
            </footer>
        </div>
    )
}

export default Card