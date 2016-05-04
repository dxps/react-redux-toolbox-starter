import React from "react";
import { Link } from "react-router";
import AppBar from "react-toolbox/lib/app_bar";
import Button from "react-toolbox/lib/button";
import style from "./style";

const MainAppBar = () => (
    <AppBar className={style.appbar} flat>
        <h1 className={style.title}>
            <Link to="/">(starter) React Toolbox + Redux</Link>
        </h1>

        <Link to="/signin">
            <Button className={style.button} icon="account_box" floating accent/>
        </Link>
    </AppBar>
);

export default MainAppBar;
