import * as React from "react";
import "./Header.scss";
import Cart from "./Cart/Cart";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="headerContainer">
      <div className="headerCircle">P</div>
      <div className="headerCircle">M</div>
      <div className="loginButton">
        <Cart />
      </div>
    </div>
  );
};

export default Header;
