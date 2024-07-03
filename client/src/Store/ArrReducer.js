import * as TypeAction from "./ActionType";

const initialState = {
  arrdesc: [],
  arrorder: [],
  arr:[],
  sort:"desc",
  forecast:[],
  diffforecast:[],
  diffavgforecast:[],
  arrmul:[]
};

const ArrReducer = (state = initialState, action) => {
  switch (action.type) {
      case TypeAction.SAVE_ARR_DESC:
      return {
        ...state,
        arrdesc: action.payload
      };
      case TypeAction.SAVE_ARR_ORDER:
      return {
        ...state,
        arrorder: action.payload
      };
      case TypeAction.SAVE_ARR:
      return {
        ...state,
        arr: action.payload
      };
      case TypeAction.UPDATE_CHOOSE_ARR:
      return {
        ...state,
        sort: action.payload
      };
      case TypeAction.SAVE_ARR_FORECASTE:
      return {
        ...state,
        forecast: action.payload
      };
      case TypeAction.SAVE_ARR_DIFF:
      return {
        ...state,
        diffforecast: action.payload
      }; 
      case TypeAction.SAVE_ARR_AVG_DIFF:
      return {
        ...state,
        diffavgforecast: action.payload
      }; 
      case TypeAction.SAVE_ARR_MUL:
      return {
        ...state,
        arrmul: action.payload
      };
  }
  return state;
};
export default ArrReducer;