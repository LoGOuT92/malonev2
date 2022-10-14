import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState<boolean>(true);
  const [tourState, setTourState] = useState<Itour["tour"]>(
    [] as Itour["tour"]
  );
  useEffect(() => {
    setTourState(tour);
    setLoading(false);
  }, []);

  return (
    <div className="tourContainer">
      <div className="tourContent">
        {loading ? null : (
          <ul className="tourList">
            {tourState.map((val) => (
              <li key={val.index} className={`${shortName} tourList`}>
                <SingleTour key={val.index} {...val} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
