import React from "react";
import SingleTour from "./SingleTour/SingleTour";
import "./Tour.scss";
import tour from "../../assets/Tour";

interface IAppProps {
  shortName: string;
}
interface Itour {
  tour: {
    index: number;
    place: string;
    city: string;
    country: string;
    date: string;
  }[];
}
const App: React.FC<IAppProps> = ({ shortName }) => {
  const tourArray: Itour["tour"] = tour;
  return (
    <div className="tourContainer">
      <div className="tourContent">
        <ul className="tourList">
          {tourArray.map((val) => (
            <li key={val.index} className={`${shortName} tourList`}>
              <SingleTour key={val.index} {...val} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
