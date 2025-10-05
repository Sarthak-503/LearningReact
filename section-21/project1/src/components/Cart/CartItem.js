import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  const onAddToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  const onRemoveToCart = () => {
    dispatch(
      cartActions.removeItemFromCart(
        id,
      )
    );
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total} <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveToCart}>-</button>
          <button onClick={onAddToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
