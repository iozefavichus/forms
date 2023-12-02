import Name from "./name";
import Age from "./age";
import Email from "./email";
import Gender from "./gender";
import styles from '../styles/form.module.css';

const Form = () => {
    return (
        <div>
            <form className={styles.root} noValidate>
                <Name />
                <Age />
                <Email />
                <Gender />
                <button>Submit</button>
            </form>
        </div>
    );
  };

export default Form;