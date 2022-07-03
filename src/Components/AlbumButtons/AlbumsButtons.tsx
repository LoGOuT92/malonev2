import * as React from "react";
import TwelveCaratToothache from "../../assets/Twelve Carat Toothache";
import HollywoodsBleeding from "../../assets/Hollywood’s Bleeding";
import BeerbongsBentleys from "../../assets/Beerbongs & Bentleys";
import Stoney from "../../assets/Stoney";
import ALbumButton from "./AlbumButton/AlbumButton";
import { Ialbum } from "../../App";
import "./AlbumButtons.scss";

interface IAppProps {
  albumsOptionsVisbility: boolean;
  setAlbumsVisbility: (albumsOptionsVisbility: boolean) => void;
  setCurretAlbum: (album: Ialbum) => void;
  gradientTheme?: string;
  albumShortName?: string;
  album?: Ialbum;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { albumsOptionsVisbility, setAlbumsVisbility } = props;
  return (
    <div className="albumButtonsContainer">
      <div
        className="albumMenuButton"
        onClick={() => setAlbumsVisbility(!albumsOptionsVisbility)}
      >
        Albums
      </div>
      <div
        className="albumSingleChangeButton"
        style={
          !albumsOptionsVisbility ? { display: "none" } : { display: "flex" }
        }
      >
        <ALbumButton
          gradientTheme="linear-gradient(130deg, red 0%, transparent 80%"
          albumShortName="TwelveCaratToothache"
          album={TwelveCaratToothache}
          {...props}
        />
        <ALbumButton
          gradientTheme="linear-gradient(130deg, blue 0%, transparent 80%)"
          albumShortName="HollywoodsBleeding"
          album={HollywoodsBleeding}
          {...props}
        />
        <ALbumButton
          gradientTheme="linear-gradient(130deg, yellow 0%, transparent 80%)"
          albumShortName="BeerbongsBentleys"
          album={BeerbongsBentleys}
          {...props}
        />
        <ALbumButton
          gradientTheme="linear-gradient(130deg, orangered 0%, transparent 76%)"
          albumShortName="Stoney"
          album={Stoney}
          {...props}
        />
      </div>
    </div>
  );
};

export default App;
