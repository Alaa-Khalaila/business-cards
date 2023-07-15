import styles from "./Button.module.css"

function Button(props){

    return(
        <div onClick={props.onClick} className={styles.btn +" "+ props.classList}>
            {props.text}
        </div>
    )
}

export default Button;