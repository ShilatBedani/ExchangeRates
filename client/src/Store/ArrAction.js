import * as TypeAction from "./ActionType";

export const saveArrDesc = (arr) => {
  return {
    type: TypeAction.SAVE_ARR_DESC,
    payload: arr
  };
};
export const saveArrOrder = (arr) => {
  return {
    type: TypeAction.SAVE_ARR_ORDER,
    payload: arr
  };
};
export const saveArr = (arr) => {
    return {
      type: TypeAction.SAVE_ARR,
      payload: arr
    };
  };
export const saveChooseArr = (sort) => {
  return {
    type: TypeAction.UPDATE_CHOOSE_ARR,
    payload: sort
  };
};
export const saveArrForecaste = (arr) => {
  return {
    type: TypeAction.SAVE_ARR_FORECASTE,
    payload: arr
  };
};
export const saveArrDiffForecaste = (arr) => {
  return {
    type: TypeAction.SAVE_ARR_DIFF,
    payload: arr
  };
};
export const saveArrAvgDiffForecaste = (arr) => {
  return {
    type: TypeAction.SAVE_ARR_AVG_DIFF,
    payload: arr
  };
};
export const saveArrMul = (arr) => {
  return {
    type: TypeAction.SAVE_ARR_MUL,
    payload: arr
  };
};