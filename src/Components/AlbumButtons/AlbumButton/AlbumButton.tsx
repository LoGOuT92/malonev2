import * as React from "react";
import { useDispatch } from "react-redux";
import { Ialbum } from "../../../App";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";

interface IAppProps {
  album: Ialbum;
  albumShortName: string;
  setCurretAlbum: (album: Ialbum) => void;
  gradientTheme: string;
}

const App: React.FunctionComponent<IAppProps> = ({
  album,
  albumShortName,
  setCurretAlbum,
  gradientTheme,
}) => {
  const dispatch = useDispatch();
  const { changeTheme } = bindActionCreators(actionCreators, dispatch);
  return (
    <button
      style={{
        backgroundImage: `${gradientTheme}`,
      }}
      // eslint-disable-next-line no-sequences
      onClick={() => (setCurretAlbum(album), changeTheme(albumShortName))}
    >
      {albumShortName}
    </button>
  );
};

export default App;
