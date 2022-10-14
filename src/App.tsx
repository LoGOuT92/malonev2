import React from "react";
import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import TwelveCaratToothache from "./assets/Twelve Carat Toothache";
import { useSelector } from "react-redux";
import "./App.scss";
import { RootState } from ".";
import { ThemeState } from "./state/reducers";
import Tour from "./Components/Tour/Tour";
import AlbumButtons from "./Components/AlbumButtons/AlbumsButtons";
import Content from "./Components/Content/Content";
import CartInfoPanel from "./Components/CartInfoPanel/CartInfoPanel";

export interface Ialbum {
  info: {
    name: string;
    shortName: string;
    albumPicture: any;
    date: string;
  };
  tracks: {
    index: number;
    Name: string;
    Lenght: string;
  }[];
}

const App: React.FC = () => {
  const [curretAlbum, setCurretAlbum] = useState<Ialbum>({} as Ialbum);
  const [albumsOptionsVisbility, setAlbumsVisbility] = useState<boolean>(false);
  const [cartInfo, setCartInfo] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { gradient } = useSelector<RootState, ThemeState>(
    (state) => state.theme
  );
  useEffect(() => {
    setCurretAlbum(TwelveCaratToothache);
    setLoading(false);
  }, []);

  return (
    <div
      className="App"
      onClick={() =>
        albumsOptionsVisbility ? setAlbumsVisbility(false) : null
      }
    >
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <CartInfoPanel cartInfo={cartInfo} setCartInfo={setCartInfo} />
          <div
            className={curretAlbum.info.shortName}
            style={{
              backgroundImage: `linear-gradient(${gradient})`,
            }}
          >
            <Header />
            <AlbumButtons
              albumsOptionsVisbility={albumsOptionsVisbility}
              setAlbumsVisbility={setAlbumsVisbility}
              setCurretAlbum={setCurretAlbum}
            />
            <Content
              curretAlbum={curretAlbum}
              albumsOptionsVisbility={albumsOptionsVisbility}
              setCartInfo={setCartInfo}
            />
          </div>
          <Tour shortName={curretAlbum.info.shortName} />
        </>
      )}
    </div>
  );
};

export default App;
