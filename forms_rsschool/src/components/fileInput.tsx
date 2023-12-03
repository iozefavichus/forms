import styles from '../styles/input.module.css';

const FileInput = () => {
    return (
        <div>
            Add files
            <input className={styles.root}/>
        </div>
    );
  };

export default FileInput;