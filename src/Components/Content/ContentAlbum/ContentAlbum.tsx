import * as React from "react";
import "./ContentAlbum.scss";
import img2 from "../../../assets/images/img2.png";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";
interface IAppProps {
  albumImage: any;
  name: string;
  shortName: string;
  setCartInfo: (val: boolean) => void;
}

const App: React.FunctionComponent<IAppProps> = ({
  albumImage,
  name,
  shortName,
  setCartInfo,
}) => {
  const dispatch = useDispatch();
  const { addItem } = bindActionCreators(actionCreators, dispatch);
  const addItemToCarthandler = () => {
    addItem({
      id: Date.now() + Math.random(),
      name: name,
      prince: 10,
    });

    setCartInfo(true);
    setTimeout(() => {
      setCartInfo(false);
    }, 5000);
  };
  return (
    <div className="contentAlbumContainer">
      <div className="AlbumImageContainer">
        <div className="AlbumPicture">
          <img src={albumImage} alt="AlbumPicture" />
        </div>
        <div className="DiscPicture">
          <img src={img2} alt="DiscPicture" />
        </div>
        <div className="AlbumBuyOptions">
          <p>{name}</p>
          <div className="AlbumBuy">
            <p>10.00$</p>
            <svg
              viewBox="0 0 24 24"
              width="20px"
              height="20px"
              onClick={addItemToCarthandler}
              className={`${shortName} shopItemSvgColor`}
            >
              <path
                fill="currentColor"
                d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
