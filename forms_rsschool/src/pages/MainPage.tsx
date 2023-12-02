import { Link } from "react-router-dom";
import styles from '../styles/mainpage.module.css';

const MainPage = () => {
    return (
        <div className={styles.root}>
            Main Page
            <Link to='/form'>Form 1</Link>
            <Link to='/fromhook'>Form 2</Link>
        </div>
    );
  };

export default MainPage;