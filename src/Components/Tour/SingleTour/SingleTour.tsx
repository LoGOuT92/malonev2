import React from "react";
import "./SingleTour.scss";

interface Iprops {
  date: string;
  place: string;
  city: string;
  country: string;
}

const SingleTour: React.FC<Iprops> = ({ date, place, city, country }) => {
  return (
    <div className="SingleTourContainer">
      <div className="SingleTourInfo">
        <li>{date}</li>
        <li>{place} </li>
        <li>
          {city} {country}
        </li>
        <li>
          <div className="SingleTourTickets">
            TICKETS
            <svg viewBox="0 0 24 24" width="20px" height="20px">
              <path
                fill="currentColor"
                d="M15.58,16.8L12,14.5L8.42,16.8L9.5,12.68L6.21,10L10.46,9.74L12,5.8L13.54,9.74L17.79,10L14.5,12.68M20,12C20,10.89 20.9,10 22,10V6C22,4.89 21.1,4 20,4H4A2,2 0 0,0 2,6V10C3.11,10 4,10.9 4,12A2,2 0 0,1 2,14V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V14A2,2 0 0,1 20,12Z"
              />
            </svg>
          </div>
        </li>
      </div>
    </div>
  );
};

export default SingleTour;
