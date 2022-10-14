import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../..";
import { ThemeState } from "../../state/reducers";
import "./CartInfoPanel.scss";

interface IAppProps {
  cartInfo: boolean;
  setCartInfo: (val: boolean) => void;
}

const App: React.FunctionComponent<IAppProps> = ({ cartInfo, setCartInfo }) => {
  const { color } = useSelector<RootState, ThemeState>((state) => state.theme);
  return (
    <div
      className="info"
      style={!cartInfo ? { display: "none" } : { display: "flex" }}
    >
      <svg
        viewBox="0 0 24 24"
        height="22px"
        width="22px"
        onClick={() => (cartInfo ? setCartInfo(false) : null)}
      >
        <path
          fill="currentColor"
          d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
        />
      </svg>
      <span>Item added to cart</span>
      <div className="progress">
        <div className="color" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default App;
