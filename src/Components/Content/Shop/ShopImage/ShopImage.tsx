import * as React from "react";
import { IpictureOptions } from "../Shop";
import "./ShopImage.scss";

interface IAppProps {
  pictureOptions: IpictureOptions;
}

const App: React.FunctionComponent<IAppProps> = ({ pictureOptions }) => {
  return (
    <div
      className="ShopImageContainer"
      style={{ opacity: `${pictureOptions.imageVisbility ? 1 : 0}` }}
    >
      <div className="ShopItemPicture">
        <img src={pictureOptions.picture} alt="AlbumPicture" />
      </div>
    </div>
  );
};

export default App;
