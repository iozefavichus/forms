import styles from '../styles/input.module.css';

const Name = () => {
    return (
        <div>
            Name:
            <input className={styles.root} />
        </div>
    );
  };

export default Name;