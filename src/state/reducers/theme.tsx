import { themeAction } from "../actions";

const themeReducer = (
  state: { gradient: string; color: string } = {
    gradient: "180deg, rgba(176, 34, 38, 1) 0%, #000000 45%",
    color: "red",
  },
  action: themeAction
) => {
  switch (action.type) {
    case "TwelveCaratToothache":
      return (state = {
        gradient: "180deg, rgba(176, 34, 38, 1) 0%, #000000 45%",
        color: "red",
      });
    case "HollywoodsBleeding":
      return (state = {
        gradient: "180deg, #10558a 0%, rgb(0, 0, 0) 45%",
        color: "blue",
      });
    case "BeerbongsBentleys":
      return (state = {
        gradient: "180deg, #cac014 0%, #000000 45%",
        color: "yellow",
      });
    case "Stoney":
      return (state = {
        gradient: "180deg, #d25934 0%, #000000 45%",
        color: "orangered",
      });
    default: {
      return state;
    }
  }
};
export default themeReducer;
