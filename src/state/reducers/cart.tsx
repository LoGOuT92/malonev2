import { Action } from "../actions";
import { ActionType } from "../actions-types";

interface IstateType {
  sum: number;
  items: {
    id: number;
    name: string;
    prince: number;
  }[];
}
interface item {
  type: string;
  payload: {
    id: number;
    name: string;
    prince: number;
  };
  id: number;
}
const cartReducer = (
  state: IstateType = {
    sum: 0,
    items: [],
  },
  action: Action
) => {
  const sumCartPrince = (arr: Array<item["payload"]>): number => {
    const tab: Array<number> = [];
    arr.forEach((val) => tab.push(val.prince));
    if (tab.length > 0) {
      const sum = tab.reduce((a, b) => a + b);
      return sum;
    } else return 0;
  };

  switch (action.type) {
    case ActionType.ADD_ITEM:
      state.items.push(action.payload);
      return (state = {
        items: state.items,
        sum: sumCartPrince(state.items),
      });
    case ActionType.REMOVE_ITEM:
      const filtredstate: Array<item["payload"]> = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = filtredstate;
      state.sum = sumCartPrince(state.items);

      return (state = {
        items: filtredstate,
        sum: state.sum,
      });
    default: {
      return state;
    }
  }
};
export default cartReducer;
