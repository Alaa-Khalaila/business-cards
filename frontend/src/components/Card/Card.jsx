import Button from "../Button/Button"
import styles from "./Card.module.css"
import { useState } from "react";

function Card(props){
    const [isClicked, setIsClicked] = useState(false);
    const [btnTitle, setBtnTitle] = useState("+")
    
    const onAddClick = () =>{
        if (isClicked){
            setIsClicked(false)
            setBtnTitle("+")
        }else{
            setIsClicked(true)
            setBtnTitle(<i class="fa fa-check"></i>)
        }
    }

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
                <Button classList={isClicked? styles.test: ""} onClick={onAddClick} text={btnTitle}></Button>
            </footer>
        </div>
    )
}

export default Card