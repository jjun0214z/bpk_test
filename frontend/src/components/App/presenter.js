import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "components/Card";
import Comment from "components/Comment";
import styles from "./style.module.scss";

const App = props => (
    <div className={styles.app}>
        <div className={styles.navigation}>
            <Link to="/">Default</Link>
            <Link to="/card">카드 UI</Link>
            <Link to="/comment">입력 폼 UI</Link>
        </div>
        <PublicRoutes />
    </div>
);

const PublicRoutes = props => (
    <Switch>
        <Route exact path="/card" component={Card} />,
        <Route exact path="/comment" component={Comment} />
    </Switch>
);


export default App;