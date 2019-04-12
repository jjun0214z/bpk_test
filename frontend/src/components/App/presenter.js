import React from 'react';
import Card from "components/Card";
import Comment from "components/Comment";
import styles from "./style.module.scss";

const App = props => (
    <div className={styles.app}>
        <Card />
        <Comment />
    </div>
);

export default App;