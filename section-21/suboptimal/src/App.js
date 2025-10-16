import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";
import { useDispatch } from "react-redux";

let isInitialState = true; // initialise when file is parsed for 1st time, not when component re-renders again
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending...",
          message: "sending cart data",
        })
      );
      const response = await fetch(
        "https://redux-1e507-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending Cart Data failed");
      }
      dispatch(
        uiActions.showNotification({
          status: "Success",
          title: "Success...",
          message: "Sent cart data successfully!",
        })
      );
    };
    if(isInitialState){
      isInitialState=false;
      return;
    }

    sendCartData()
      .then(() => {})
      .catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error...",
            message: "Sent cart data failed!",
          })
        );
      });
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
