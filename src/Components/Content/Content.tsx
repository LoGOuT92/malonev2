import * as React from "react";
import { Ialbum } from "../../App";
import "./Content.scss";
import ContentAlbum from "./ContentAlbum/ContentAlbum";
import ContentTracks from "./ContentTracks/ContentTracks";
import Shop from "./Shop/Shop";

interface IAppProps {
  curretAlbum: Ialbum;
  albumsOptionsVisbility: boolean;
  setCartInfo: (val: boolean) => void;
}
const App: React.FunctionComponent<IAppProps> = (props) => {
  const Album: Ialbum = props.curretAlbum;
  const { albumsOptionsVisbility } = props;
  return (
    <div
      className="contentContainer"
      style={{ opacity: `${albumsOptionsVisbility ? 0.2 : 1}` }}
    >
      <p>New album available!</p>
      <div className="AlbumTitle">
        <h1>{Album.info.name}</h1>
        <h4>{Album.info.date}</h4>
      </div>
      <div className="mainContent">
        <ContentAlbum
          albumImage={Album.info.albumPicture}
          name={Album.info.name}
          shortName={Album.info.shortName}
          {...props}
        />
        <ContentTracks album={Album.tracks} shortName={Album.info.shortName} />
      </div>
      <Shop shortName={Album.info.shortName} {...props} />
    </div>
  );
};

export default App;
