import * as React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../..";
import { CartState, ThemeState } from "../../../state/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";

interface merchItem {
  id: number;
  name: string;
  prince: number;
}

const Cart: React.FunctionComponent = () => {
  const [cartVisibility, setCartVisibility] = React.useState<boolean>(false);
  //dodawanie
  const dispatch = useDispatch();
  const { removeItem } = bindActionCreators(actionCreators, dispatch);
  //pobieranie state
  const cart = useSelector<RootState, CartState>((state) => state.cart);
  const theme = useSelector<RootState, ThemeState>((state) => state.theme);
  const cartVisibilityHandler = (val: boolean): void => {
    setCartVisibility(!val);
  };
  return (
    <div className="CartContainer">
      <div className="CartPanel">
        <button onClick={() => cartVisibilityHandler(cartVisibility)}>
          Cart
        </button>
        <div
          className="itemsCount"
          style={{ border: `2px solid ${theme.color}` }}
        >
          {cart.items.length}
        </div>
      </div>
      <div
        className="CartList"
        style={!cartVisibility ? { display: "none" } : { display: "flex" }}
      >
        <ul>
          {cart.items.map((item: merchItem) => (
            <li>
              <span>{item.name}</span>
              <span>
                {item.prince}$
                <svg
                  viewBox="0 0 24 24"
                  height="20px"
                  width="20px"
                  onClick={() => removeItem(item.id)}
                >
                  <path
                    fill="currentColor"
                    d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
                  />
                </svg>
              </span>
            </li>
          ))}
          <li>
            <span>Summary</span>
            <span>
              {cart.sum} $
              <svg viewBox="0 0 24 24" width="20px" height="20px">
                <path
                  fill="currentColor"
                  d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"
                />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
