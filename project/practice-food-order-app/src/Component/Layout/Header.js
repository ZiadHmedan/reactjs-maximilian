import React from "react";
import classes from "./Header.module.css";
import maelsHeader from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={maelsHeader} alt="mealHeader" />
      </div>
    </>
  );
};

export default Header;
