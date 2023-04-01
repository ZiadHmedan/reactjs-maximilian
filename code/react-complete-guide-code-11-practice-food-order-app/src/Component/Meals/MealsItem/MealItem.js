import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MeatItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div>{props.desc}</div>
          <div>{props.price}</div>
        </div>
        <div>
          <MeatItemForm onAddToCart={addToCart} />
        </div>
      </li>
    </div>
  );
};

export default MealItem;
