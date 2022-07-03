import * as React from "react";
import "./Track.scss";

interface IAppProps {
  tab: { index: number; Name: string; Lenght: string };
}

const App: React.FunctionComponent<IAppProps> = ({ tab }) => {
  return (
    <div className="TrackContainer">
      <div className="TrackInfo">
        <div>{tab.index}</div>
        <div>{tab.Name}</div>
      </div>
      <div>{tab.Lenght}</div>
    </div>
  );
};

export default App;
