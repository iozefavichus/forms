import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/mainpage.module.css';


export default class MainPage extends React.Component {


  render() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <Link to='/form'>Form 1</Link>
                </div>
                <div className={styles.links}>
                    <Link to='/formhook'>Form 2</Link>
                </div>
            </div>
            {/* <CardList userData={userData}/> */}
        </div>

    );
  }
}
