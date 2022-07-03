import * as React from "react";
import { Ialbum } from "../../../App";
import "./ContentTracks.scss";
import Track from "./Track/Track";

interface IAppProps {
  album: Ialbum["tracks"];
  shortName: string;
}

const App: React.FunctionComponent<IAppProps> = ({ album, shortName }) => {
  return (
    <div className="ContentTracksContainer">
      <ul>
        {album.map((val) => (
          <li key={val.index} className={`${shortName} trackList`}>
            <Track key={val.index} tab={val}></Track>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
