import { ActionType } from "../actions-types";
import { Dispatch } from "redux";
import { Action, themeAction } from "../actions";

interface merchItem {
  id: number;
  name: string;
  prince: number;
}

// export const changeTheme = (name: string) => {
//   return {
//     type: name,
//   };
// };
export const changeTheme = (name: string) => {
  return (dispatch: Dispatch<themeAction>) => {
    dispatch({
      type: name,
    });
  };
};
export const addItem = (item: merchItem) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_ITEM,
      payload: item,
    });
  };
};
export const removeItem = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_ITEM,
      payload: id,
    });
  };
};
