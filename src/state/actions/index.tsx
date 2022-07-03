import { ActionType } from "../actions-types";

interface addItemAction {
  type: ActionType.ADD_ITEM;
  payload: {
    id: number;
    name: string;
    prince: number;
  };
}
interface removeItemAction {
  type: ActionType.REMOVE_ITEM;
  payload: number;
}
interface changeTheme {
  type: string;
}
export type Action = addItemAction | removeItemAction;
export type themeAction = changeTheme;
