import styles from "./Button.module.css"

function Button(props){
    return(
        <div className={styles.btn}>
            {props.text}
        </div>
    )
}

export default Button;