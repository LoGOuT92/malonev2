import * as React from "react";
import ShopItem from "./ShopItem/ShopItem";
import "./ShopItems.scss";
export interface IAppProps {
  setpictureOptions: (val: boolean | any) => void;
  merch: {
    index: number;
    name: string;
    prince: string;
    image: any;
  }[];
  shortName: string;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { merch } = props;
  return (
    <div className="ShopItemsContainer">
      <ul>
        {merch.map((val) => (
          <li className={`${props.shortName} shopItemList`} key={val.index}>
            <ShopItem key={val.index} {...props} content={val} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
