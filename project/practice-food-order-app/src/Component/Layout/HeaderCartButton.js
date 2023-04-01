import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [btnAnimated, setBtnAnimated] = useState(false);
  useEffect(() => {
    if (items.length === 0) return;

    setBtnAnimated(true);
    const timer = setTimeout(() => {
      setBtnAnimated(false);
      console.log("false");
    }, 300);
    return () => {
      clearTimeout(timer);
      console.log(true);
    };
  }, [items]);

  const numberOfCartItem = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${btnAnimated ? classes.bump : ""} `;
  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
