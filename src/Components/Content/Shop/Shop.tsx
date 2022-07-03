import React, { useState } from "react";
import ShopItems from "./ShopItems/ShopItems";
import ShopImage from "./ShopImage/ShopImage";
import merch from "../../../assets/Merch";
import "./Shop.scss";

interface IAppProps {
  shortName: string;
}
export interface IpictureOptions {
  imageVisbility: boolean;
  picture: string;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [pictureOptions, setpictureOptions] = useState<IpictureOptions>({
    imageVisbility: false,
    picture: "",
  });

  return (
    <div className="ShopContainer">
      <ShopItems
        setpictureOptions={setpictureOptions}
        merch={merch}
        {...props}
      />
      <ShopImage pictureOptions={pictureOptions} />
    </div>
  );
};

export default App;
