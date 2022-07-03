import themeReducer from "./theme";
import cartReducer from "./cart";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
});

export type ThemeState = ReturnType<typeof themeReducer>;
export type CartState = ReturnType<typeof cartReducer>;
// export type Actions = ReturnType< typeof themeReducer|typeof cartReducer>;
export default allReducers;
