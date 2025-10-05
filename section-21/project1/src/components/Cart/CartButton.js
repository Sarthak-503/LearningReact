import {useDispatch, useSelector} from "react-redux"
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";
const CartButton = (props) => {
  const dispatch =  useDispatch();
  const cartQuantity = useSelector(state=> state.cart.totalQuantity)
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
 //  We need to execute toggle as a method here because these auto-generated actions which you get 
 // here, are actually action creator methods, which you have to execute and when you execute them, 
 // they return action objects. So it's then this returned action object which we dispatch here.
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
