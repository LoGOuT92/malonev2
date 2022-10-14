import React, { useState, useEffect } from "react";
import ShopItems from "./ShopItems/ShopItems";
import ShopImage from "./ShopImage/ShopImage";
import merch from "../../../assets/Merch";
import "./Shop.scss";

interface IAppProps {
  shortName: string;
  setCartInfo: (val: boolean) => void;
}
export interface IpictureOptions {
  imageVisbility: boolean;
  picture: string;
}
interface merchItems {
  merch: Array<{ index: number; name: string; prince: string; image: string }>;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [pictureOptions, setpictureOptions] = useState<IpictureOptions>({
    imageVisbility: false,
    picture: "",
  });
  const [merchState, setMerchState] = useState<merchItems["merch"]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setMerchState(merch);
    setLoading(false);
  }, []);

  return (
    <div className="ShopContainer">
      {loading ? null : (
        <>
          {" "}
          <ShopItems
            setpictureOptions={setpictureOptions}
            merch={merchState}
            {...props}
          />
          <ShopImage pictureOptions={pictureOptions} />
        </>
      )}
    </div>
  );
};

export default App;
