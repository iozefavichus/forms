import Name from "./name";
import Age from "./age";
import Email from "./email";
import Gender from "./gender";
import styles from '../styles/form.module.css';
import Password from "./password";
import PasswordRepeat from "./passwrodRepeat";
import AcceptTC from "./acceptTC";
import FileInput from "./fileInput";
import Country from "./country";

const Form = () => {
    return (
        <div>
            <form className={styles.root} noValidate>
                <Name />
                <Age />
                <Email />
                <Password />
                <PasswordRepeat />
                <Gender />
                <AcceptTC />
                <FileInput />
                <Country />
                <button>Submit</button>
            </form>
        </div>
    );
  };

export default Form;