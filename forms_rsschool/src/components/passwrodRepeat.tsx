import styles from '../styles/input.module.css';

const PasswordRepeat = () => {
    return (
        <div>
            Repeat password:
            <input className={styles.root} />
        </div>
    );
  };

export default PasswordRepeat;