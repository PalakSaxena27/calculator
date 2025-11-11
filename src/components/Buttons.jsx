import styles from "./Buttons.module.css";

function Buttons ({onButtonClick})
{   
    const buttonNames = ["C","1","2","+", "3","4","-","5","6","x","7","8","/","0","%","=","."];
    return(
        <div className={styles.container}>
            {buttonNames.map((buttonNames) => (<button key={buttonNames} className={styles.button} onClick={() => onButtonClick(buttonNames)}>{buttonNames}</button>))}
        
        </div>
    );
}
export default Buttons;